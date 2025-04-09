import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {

    // Custom hook de react router dom para ayudarnos con la navegacion
    const navigate = useNavigate();
    const isLoggedIn = !!localStorage.getItem("token"); // Comprobamos si hay token
    // console.log(req.body)

    // Componente para salir de la aplicacion y volver al initialPage
    const onLogout = () =>{
        // con esto digo que quiero navegar al initialPage
        localStorage.removeItem("token");
        navigate('/initial', { replace: true });
    }

    const onLogin = () => {
        navigate('/login');
      };

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">            
            <Link 
                className="navbar-brand" 
                to="/initial"
            >
                CF
            </Link>
                <div className="navbar-collapse">
                    <div className="navbar-nav">

                        <NavLink 
                            className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : '' }` } 
                            to="/lamb"
                        >
                            LAMBORGHINI
                        </NavLink>

                        <NavLink 
                            className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : '' }` } 
                            to="/porsche"
                        >
                            PORSCHE
                        </NavLink>

                        <NavLink 
                            className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : '' }` } 
                            to="/search"
                        >
                            BUSCAR
                        </NavLink>
                        
                        {
                        isLoggedIn && (
                        <NavLink
                            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                            to="/dashboard-seller"
                        >
                            COTIZACIONES
                        </NavLink>
            )
          }
                    </div>
                </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-primary'>
                        Ventas premium
                    </span>

                    {isLoggedIn ? (
                        <button className='nav-item nav-link btn' onClick={onLogout}>
                        Salir
                        </button>
                    ) : (
                        <button className='nav-item nav-link btn' onClick={onLogin}>
                        Login Vendedor
                        </button>
                    )}
                </ul>
            </div>
        </nav>
    )
}