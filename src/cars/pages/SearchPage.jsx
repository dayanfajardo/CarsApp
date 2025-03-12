import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm"
import queryString from 'query-string';

import { getCarsByName } from "../helpers";
import { CarCard } from "../components"

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
    
    <div className="search-container">
        <hr />
            <h1 className="search-title">Motor de búsqueda</h1>
              <div className="search-box">
                <form onSubmit={onSearchSubmit}>
                  <input
                    type="text"
                    placeholder="Busca un auto"
                    className="search-input"
                    name="searchText"
                    autoComplete="off"
                    value={searchText}
                    onChange={onInputChange}
                  />
                  <button className="search-btn">Buscar</button>
                </form>
              </div>

            <div className="results-container">
              {showSearch && <div></div>}

              {showError && (
                <div className="alert alert-danger">
                  No se encontró: <b>{q}</b>
                </div>
              )}

              {cars.map((car) => (
                <div key={car.id} className="car-card">
                  <CarCard {...car} />
                </div>
              ))}
            </div>
          </div>
    )
}
