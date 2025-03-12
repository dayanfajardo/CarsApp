import { useMemo } from "react";

import { getCarsByBrand } from "../helpers"
import { CarCard } from "./CarCard";


export const CarList = ({ brand }) => {

    const cars = useMemo( () => getCarsByBrand( brand ) , [ brand ] ) 

  return (
    <div className="row rows-cols-2 row-cols-md-3 g-4">
        {
            cars.map( car => (
                <div className="col mb-4" >
                    <CarCard 
                        key={ car.id }
                        { ...car }
                    />                    
                </div>
            ))
        }
    </div>
  )
}
