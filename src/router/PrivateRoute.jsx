// Componente de protección de rutas. Verifica si hay un token en localStorage para permitir el acceso.


import { Navigate } from 'react-router-dom';


export const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  return !!token
    ? children
    : <Navigate to="/login" />;
};
