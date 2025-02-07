import { cars } from "../data/cars";


export const getCarsByBrand = ( brand ) => {

    const validBrand = ['Lamborghini','Porsche'];

    if (!validBrand.includes(brand) ) {
        throw new Error(`${ brand } is not a valid brand`)
    }

    return cars.filter( car => car.brand === brand );

}