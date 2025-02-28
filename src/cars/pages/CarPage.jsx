import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getCarsById } from "../helpers";
import { ChartModal } from "../components";



export const CarPage = () => {
  const { id } = useParams();
  const car = useMemo(() => getCarsById(id), [id]);

  const navigate = useNavigate();

  const onReturnPage = () => {
    navigate(-1, {
      replace: false,
    });
  };

  if (!car) {
    return <Navigate to="/porsche" />;
  }

  return (
    <div className="car-page">
      <div className="content-container">
        <div className="row mt-5">
          <hr />
          <div className="col-4">
            <img
              src={`/assets/cars/${id}.jpg`}
              alt={car.name}
              className="img-thumbnail animate__animated animate__fadeIn"
            />
          </div>

          <div className="col-8">
            <h3>{car.name}</h3>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><b>Precio: </b>{car.price} ($)</li>
              <li className="list-group-item"><b>Linea: </b>{car.line}</li>
              <li className="list-group-item"><b>Caballos de fuerza: </b>{car.horsepower}</li>
              <li className="list-group-item"><b>Velocidad final: </b>{car.top_speed} km/h</li>
              <li className="list-group-item"><b>Motor: </b>{car.power}</li>
            </ul>
          </div>
        </div>

        {/* Botón de regresar ahora dentro del contenedor correcto */}
        <div className="button-container">
          <button className="custom-btn" onClick={onReturnPage}>
            Regresar
          </button>
        </div>

        <ChartModal />
      </div>
    </div>
  );
};
