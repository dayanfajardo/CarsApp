import { cars } from "../data/cars"


export const getCarsByName = ( name = '') => {
    
    name = name.toLocaleLowerCase().trim();
    
    if ( name.length === 0 ) return [];

    return cars.filter(
        car => car.name.toLocaleLowerCase().includes( name )
    );

}