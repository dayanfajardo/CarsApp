import { useMemo } from "react";

import { getCarsByBrand } from "../helpers"
import { CarCard } from "./CarCard";


export const CarList = ({ brand }) => {

    const cars = useMemo( () => getCarsByBrand( brand ) , [ brand ] ) 

  return (
    <div className="row rows-cols-2 row-cols-md-3 g-3">
        {
            cars.map( car => (
                <CarCard 
                    key={ car.id }
                    { ...car }
                />
            ))
        }
    </div>
  )
}
