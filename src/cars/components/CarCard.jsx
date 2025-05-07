
// Componente que muestra una tarjeta individual de auto con imagen, nombre, año y botón para ver más información.
// Utiliza la ruta dinámica para ir al detalle del auto.


import { Link } from "react-router-dom";

export const CarCard = ({ id, name, year, brand, image }) => {
  
  const carUrlImage = image;

  return (
    <div className="car-card col animate__animated animate__fadeIn">
      <div className="row no-gutters">
        <div className="col-4">
          <img
            src={carUrlImage}
            className="card-img mx-auto d-block"
            alt={name}
          />
        </div>
        <div className="col-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{year}</p>
            <Link
              className="btn btn-link text-info fill-hover"
              to={`/car/${id}`}
            >
              ver más
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
