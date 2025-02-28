import { useNavigate } from "react-router-dom";

export const NavBarPageInitial = () => {
  const navigate = useNavigate();

  const onEnterApp = () => {
    navigate("/", { replace: true });
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <nav className="navbar">
      {/* Logo y botón Modelos alineados a la izquierda */}
        <div className="navbar-left">
          <img
            src="/assets/logs/logo-init.png"
            alt="CarFusion Logo"
            className="navbar-logo"
          />
          <button className="navbar-btn" onClick={onEnterApp}>
            Modelos
          </button>
        </div>

      {/* Botón de Login alineado a la derecha */}
      <div className="navbar-right">
        <button className="navbar-btn login-btn" onClick={handleLogin}>
          Login Vendedor
        </button>
      </div>
    </nav>
  );
};
