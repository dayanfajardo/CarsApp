import { NavBarPageInitial } from "../../ui/components";
import { useLoginSeller } from "../hooks/useLoginSeller";
import { Link } from "react-router-dom";

export const LoginSellerPage = () => {
  
  const { formData, error, handleChange, handleSubmit } = useLoginSeller();

  return (
    <div className="login-container">
      <NavBarPageInitial />
      <div className="login-box">
        <h3><b>Iniciar Sesión</b></h3>

        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleSubmit}>
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
              placeholder="Ingresa tu contraseña"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="login-btn">Iniciar Sesión</button>
        </form>

        <p className="register-link">
          ¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link>
        </p>
      </div>
    </div>
  );
};
