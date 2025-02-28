// Componente para exponer imagenes e informacion de los autos
import { Link } from "react-router-dom";

export const CarCard = ({
    id,
    name,
    brand,
    price,
    year,
    line,
    color,
    horsepower,
    top_speed,
    cylinders,
    power,
}) => {


  const carUrlImage = `/assets/cars/${id}.jpg`;


  return (
    
   <div className="col animate__animated animate__fadeIn" >
        <div className="card">

            <div className="row no-gutters">
                <div className="col-4">
                  <img 
                      src={ carUrlImage } 
                      className="card-img mx-auto d-block" 
                      alt={ name }
                  />
                </div>

                <div className="col-8">
                    <div className="card-body" >
                         <h5 className="card-title">{ name }</h5>
                          <p className="card-text" >{ year }</p>
                         
                          {/* Para abrir la informacion de los autos, hacemos la navegacion */}
                          <Link 
                            className="btn btn-link text-info fill-hover"
                            to={`/car/${ id }`}
                          >
                              ver más
                          </Link>
                    </div>
                </div>                
            </div>
        </div>
   </div>
  )
}