import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {

    // Custom hook de react router dom para ayudarnos con la navegacion
    const navigate = useNavigate();


    // Componente para salir de la aplicacion y volver al initialPage
    const onLogout = () =>{
        // con esto digo que quiero navegar al initialPage
        navigate('/initial', {
        // El replace deniega que pueda volver al historial anterior
            replace: true
        })
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">            
            <Link 
                className="navbar-brand" 
                to="/"
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
                    </div>
                </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-primary'>
                        Ventas premium
                    </span>

                    <button
                        className='nav-item nav-link btn'
                        onClick={ onLogout }
                    >
                        Salir   
                    </button>
                </ul>
            </div>
        </nav>
    )
}