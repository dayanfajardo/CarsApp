import { useState } from "react";
import { validateAndSubmitQuote } from "../helpers/validateAndSubmitQuote"; // Asegúrate de que la ruta esté correcta

export const ChartModal = ({ carName }) => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleModal = () => setShowModal(!showModal);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await validateAndSubmitQuote({
      email,
      phone,
      carName,
      onSuccess: () => {
        setEmail('');
        setPhone('');
        setShowModal(false);
      },
    });
  };

  return (
    <>
      <button className="cotizar-btn" onClick={handleModal}>
        Cotizar
      </button>
      <hr />
      {showModal && (
        <div className="modal show d-block animate__animated animate__fadeIn" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <form onSubmit={handleSubmit}>
                <div className="modal-header">
                  <h5 className="modal-title">Cotiza tu vehículo</h5>
                  <button type="button" className="btn-close" onClick={handleModal}></button>
                </div>
                <div className="modal-body">
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo electrónico</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Ingresa tu correo"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Número de celular</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      placeholder="Ingresa tu número de celular"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={handleModal}>Cancelar</button>
                  <button type="submit" className="btn btn-success">Enviar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
