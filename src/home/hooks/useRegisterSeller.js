import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const useRegisterSeller = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { name, email, password, confirmPassword, phone } = formData;

    // Validación de campos
    if (!email.includes("@")) {
      return Swal.fire("Error", "El correo electrónico no es válido", "error");
    }

    if (phone.length < 10 || !/^\d+$/.test(phone)) {
      return Swal.fire("Error", "El número de celular debe tener al menos 10 dígitos numéricos", "error");
    }

    if (password !== confirmPassword) {
      return Swal.fire("Error", "Las contraseñas no coinciden", "error");
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/new", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Registro exitoso. Redirigiendo al login...");
        Swal.fire({
          title: "¡Registro exitoso!",
          text: "Serás redirigido al login...",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
        setTimeout(() => navigate("/login"), 2000);
      } else {
        const msg = data.msg || data.error || "Error en el registro";
        setError(msg);
        Swal.fire("Error", msg, "error");
      }
    } catch (error) {
      setError("Error en el servidor. Inténtalo de nuevo.");
      Swal.fire("Error", "Error en el servidor. Intenta más tarde.", "error");
    }
  };

  return { formData, error, success, handleChange, handleSubmit };
};
