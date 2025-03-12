import { useState } from "react"


export const ChartModal = () => {

    // Estado para mostrar u ocultar el formulario
    const [showModal, setShowModal] = useState(false);

    const handleModal = () => {
        setShowModal(!showModal)
      }

      return(
        <>
              {/* Botón para mostrar el modal */}
        <button className="cotizar-btn" onClick={handleModal}>
          Cotizar
        </button>
        <hr />

        {/* Modal */}
        {showModal && (
          <div className="modal show d-block animate__animated animate__fadeIn " tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Cotiza tu vehículo</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={handleModal}
                  ></button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Correo electrónico
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Ingresa tu correo"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">
                        Número de celular
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        placeholder="Ingresa tu número de celular"
                      />
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleModal}
                  >
                    Cancelar
                  </button>
                  <button type="submit" className="btn btn-success">
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}      
        </>
      )

}