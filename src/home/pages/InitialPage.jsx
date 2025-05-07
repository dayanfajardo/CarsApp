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
         </div>
        </div>
      </div>
  );
};