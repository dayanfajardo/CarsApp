// Custom hook reutilizable para manejar formularios de forma controlada.
// Permite actualizar y resetear campos de forma sencilla.


import { useState } from 'react';

export const useForm = ( initialForm = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}