import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';

import { useForm } from "../../hooks/useForm"
import { CarCard } from "../components/CarCard"
import { getCarsByName } from "../helpers";

export const SearchPage = () => {

  const navigate = useNavigate();
  //useLocation para obtener la ubicacion donde nos encontramos
  const location = useLocation();

  const { q = '' } = queryString.parse( location.search );
  const cars = getCarsByName(q);

  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && cars.length === 0;
  
  
const { searchText, onInputChange } = useForm({
  searchText: q
});


const onSearchSubmit = ( event ) => {
  //Con esto hago un full refresh
    event.preventDefault();
    // if ( searchText.trim().length <= 1 ) return;

    navigate( `?q=${ searchText }`);
}
 

  return (
    <>
        <h1>Colecciones</h1>
        <hr />

        <div className="row">

          <div className="col-5">
              <h4>Searching</h4>
              <hr />
              <form onSubmit={ onSearchSubmit }>
                <input 
                  type="text" 
                  placeholder="Busca un auto"
                  className="form-control"
                  name="searchText"
                  autoComplete="off"
                  value={ searchText }
                  onChange={ onInputChange }
                />

                <button className="btn btn-outline-primary mt-1" >
                  Buscar
                </button>
              </form>
          </div>

          <div className="col-7">
          <h4>Resultados</h4>
          <hr />

          <div className="alert alert-primary" style={{ display: showSearch ? '' : 'none' }}>...</div>

          <div className="alert alert-danger" style={{ display: showError ? '' : 'none' }}>
            No esta diponible: <b>{ q }</b>          
          </div>
          {
            cars.map( car => (
              <CarCard key={ car.id } { ...car } />
            ))
          }
          </div>

        </div>

    </>
  )
}
