import { cars } from "../data/cars";

export const getCarsById = ( id ) => {

    return cars.find( car => car.id === id );

}