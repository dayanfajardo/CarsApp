import Swal from 'sweetalert2';
import { useEffect, useState } from "react";
import { NavBarPageInitial } from "../../ui/components";
import authApi from "../../auth/api/authApi"; // o axios configurado

export const DashboardSellerPage = () => {
  const [cotizaciones, setCotizaciones] = useState([]);

  const cargarCotizaciones = async () => {
    try {
      const { data } = await authApi.get('/quotes');
      setCotizaciones(data.quotes);
    } catch (error) {
      console.error("Error cargando cotizaciones", error);
    }
  };

  useEffect(() => {
    cargarCotizaciones();
  }, []);

  const eliminarCotizacion = async (id) => {
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: "¡Esta acción no se puede deshacer!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    });

    if (result.isConfirmed) {
      try {
        await authApi.delete(`/quotes/${id}`);
        Swal.fire('Eliminado', 'La cotización ha sido eliminada.', 'success');
        cargarCotizaciones(); // recargar la lista
      } catch (error) {
        Swal.fire('Error', 'Hubo un problema al eliminar.', 'error');
      }
    }
  };

  return (
    <div className="dashboard-container">
      <NavBarPageInitial />
      <div className="dashboard-content">
        <h2>Cotizaciones Recibidas</h2>
        <table className="cotizaciones-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Correo</th>
              <th>Teléfono</th>
              <th>Auto</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {cotizaciones.map((cot, index) => (
              <tr key={cot._id}>
                <td>{index + 1}</td>
                <td>{cot.email}</td>
                <td>{cot.phone}</td>
                <td>{cot.carName}</td>
                <td>
                  <button
                    onClick={() => eliminarCotizacion(cot._id)}
                    className="btn btn-danger btn-sm"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
