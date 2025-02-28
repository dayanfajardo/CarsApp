import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui/components"
import { CarPage, LambPage, PorschePage, SearchPage } from "../pages"


export const CarsRoutes = () => {

  return (
        <>
        <Navbar />

        <div className="container">
            <Routes>
                <Route path="lamb" element={<LambPage/>} />
                <Route path="porsche" element={<PorschePage />} />

                <Route path="search" element={<SearchPage/>} />
                {/* Ponemos car/:id para que nos dirija a la pantalla de la informacion de los autos  */}
                <Route path="car/:id" element={<CarPage/>} />

                
                {/* Nuestra ruta comodin */}
                <Route path="/" element={<Navigate to="/porsche" />}/>

          </Routes>
        </div>

        </>
  )
}
