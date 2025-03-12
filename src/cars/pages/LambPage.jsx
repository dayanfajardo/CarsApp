import { CarList } from "../components"

export const LambPage = () => {

 
  return (
    <>
    <div className="background-lamb"></div>
        <div className="lamb-page-content">
          <h1>Modelos Lamborghini</h1>
          <hr />

          <CarList brand='Lamborghini' />
        </div>
      
    </>
  )
}
