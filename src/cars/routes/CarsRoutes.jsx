import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui/components/NavBar"
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
                <Route path="car" element={<CarPage/>} />

                
                {/* Nuestra ruta comodin */}
                <Route path="/" element={<Navigate to="/porsche" />}/>

          </Routes>
        </div>

        </>
  )
}
