import { useNavigate } from "react-router-dom";

export const NavBarPageInitial = () => {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem("token"); // Verifica si hay sesión

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

      {/* Solo mostramos el botón de Login si NO está autenticado */}
      <div className="navbar-right">
        {!isAuthenticated && (
          <button className="navbar-btn login-btn" onClick={handleLogin}>
            Login Vendedor
          </button>
        )}
      </div>
    </nav>
  );
};
