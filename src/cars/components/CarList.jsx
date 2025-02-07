import { getCarsByBrand } from "../helpers"


export const CarList = ({ brand }) => {

    const cars = getCarsByBrand( brand );

  return (
    <ul>
        {
            cars.map( car => (
                <li key={car.id}>
                    { car.name }
                </li>
            ))
        }
    </ul>
  )
}
