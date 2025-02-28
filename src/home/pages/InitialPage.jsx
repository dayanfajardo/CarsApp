import { useNavigate } from "react-router-dom";
import { CarVideo } from "../../cars/components";
import { NavBarPageInitial } from "../../ui/components/NavBarPageInitial";

export const InitialPage = () => {

    const navigate = useNavigate();  

      return (
      <div>
        <NavBarPageInitial/>
          <CarVideo/>      
            <div className="initial-page">
             <div className="content">   
          {/* <h1>Bienvenido a Car Fusion</h1>                  */}
        </div>
      </div>
      </div>
  );
};