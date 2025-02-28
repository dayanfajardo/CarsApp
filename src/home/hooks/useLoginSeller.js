import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useLoginSeller = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Manejar cambios en los inputs
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // Enviar el formulario al backend
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/sellers/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token); // Guardar el token en localStorage
        navigate("/dashboard-seller"); // Redirigir al dashboard del vendedor
      } else {
        setError(data.error || "Credenciales incorrectas");
      }
    } catch (error) {
      setError("Error en el servidor. Inténtalo de nuevo.");
    }
  };

  return { formData, error, handleChange, handleSubmit };
};
