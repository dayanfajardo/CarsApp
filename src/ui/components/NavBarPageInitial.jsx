import { Link, useNavigate } from "react-router-dom"

export const NavBarPageInitial = () => {

    const navigate = useNavigate();

    const onEnterApp = () => {
        navigate('/',{
          replace: true
        })
    }

  return (
    <nav className="navbar">
    {/* Contenedor para logo y botón */}
    <div className="navbar-left">
      <img src="/public/assets/logs/logo-init.png" alt="CarFusion Logo" className="navbar-logo" />
      <button className="navbar-btn" onClick={onEnterApp}>
        Modelos
      </button>
    </div>
  </nav>
);
};