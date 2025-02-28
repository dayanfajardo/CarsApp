import { NavBarPageInitial } from "../../ui/components";
import { Link } from "react-router-dom";
import { useRegisterSeller } from "../hooks/useRegisterSeller";



export const RegisterPage = () => {
  const { formData, error, handleChange, handleSubmit } = useRegisterSeller(); //Corregir error

  return (
    <div className="register-container">
      <NavBarPageInitial />
      <div className="register-box">
        <h3><b>Registro de Vendedor</b></h3>

        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Nombre Completo</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Tu nombre"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Ingresa tu correo"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Crea una contraseña"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="confirmPassword">Confirmar Contraseña</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Repite tu contraseña"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="register-btn">Registrarse</button>
        </form>

        {/* Enlace para ir a la página de inicio de sesión */}
        <p className="register-link">
          ¿Ya tienes una cuenta?<Link to="/login">Inicia sesión aquí</Link>
        </p>
      </div>
    </div>
  );
};
