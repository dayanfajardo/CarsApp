import { useNavigate } from "react-router-dom";

export const InitialPage = () => {

const navigate = useNavigate();

const onLogin = () => {
    navigate('/',{
      replace: true
    })
}

  return (
    <div className="container mt-5">
      <h1>Ingresar</h1>
      <hr />

      <button 
         className="btn btn-primary" 
         onClick={ onLogin }  
      >

      </button>

    </div>
  )
}
