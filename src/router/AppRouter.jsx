//Router principal de la aplicacion
import { Route, Routes } from "react-router-dom";
import { InitialPage, LoginSellerPage, RegisterPage } from "../home/pages"; // Aquí corregimos
import { CarsRoutes } from "../cars/routes/CarsRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="initial" element={<InitialPage />} />
      <Route path="login" element={<LoginSellerPage />} />
      <Route path="register" element={<RegisterPage />} /> {/* Corregido aquí */}
      <Route path="/*" element={<CarsRoutes  />} />
    </Routes>
  );
};

            {/* Cualquier ruta que no sea el inicio pase por este componente */}
  