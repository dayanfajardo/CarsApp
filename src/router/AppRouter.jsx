//Router principal de la aplicacion
import { Route, Routes } from "react-router-dom";
import { InitialPage, LoginSellerPage, RegisterPage } from "../home/pages";
import { CarsRoutes } from "../cars/routes/CarsRoutes";
import { DashboardSellerPage } from "../home/pages/DashboardSellerPage";
import { PrivateRoute } from "./PrivateRoute"; // <-- ¡esto es clave!

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="initial" element={<InitialPage />} />
      <Route path="login" element={<LoginSellerPage />} />
      <Route path="register" element={<RegisterPage />} />

      {/* Ruta protegida */}
      <Route
        path="/dashboard-seller"
        element={
          <PrivateRoute>
            <DashboardSellerPage />
          </PrivateRoute>
        }
      />

      {/* Resto de rutas */}
      <Route path="/*" element={<CarsRoutes />} />
    </Routes>
  );
};
