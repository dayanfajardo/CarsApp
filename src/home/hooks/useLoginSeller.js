import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authApi from "../../auth/api/authApi";

export const useLoginSeller = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await authApi.post("/auth/login", formData);
      
      localStorage.setItem("token", data.token); // Guardar el token
      navigate("/dashboard-seller"); // Redirigir al dashboard
    } catch (err) {
      const msg = err.response?.data?.msg || "Error en el servidor. Inténtalo de nuevo.";
      setError(msg);
    }
  };

  return { formData, error, handleChange, handleSubmit };
};
