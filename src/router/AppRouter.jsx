//Router principal de la aplicacion
import { Route, Routes } from "react-router-dom";

import { InitialPage } from "../home/pages";
import { CarsRoutes } from "../cars/routes/CarsRoutes";

export const AppRouter = () => {
  return (
    <>
   
      
        <Routes>
            <Route path="initial" element={<InitialPage />} />

            {/* Cualquier ruta que no sea el inicio pase por este componente */}
            <Route path="/*" element={<CarsRoutes />} />          

           
      </Routes>
    </>
  )
}
