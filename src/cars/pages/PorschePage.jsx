import { CarList } from "../components"



export const PorschePage = () => {
  return (
    <>
    <div className="background-pors"></div>
      <div className="pors-page-content">
        <h1>Modelos Porsche</h1>
        <hr />

        <CarList brand='Porsche' />
      </div>  
    </>
  )
}
