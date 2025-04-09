import Swal from "sweetalert2";
import { handleSubmitQuote } from "./handleSubmitQuote";

export const validateAndSubmitQuote = async ({ email, phone, carName, onSuccess }) => {
  // Validación del correo
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return Swal.fire({
      icon: 'error',
      title: 'Correo inválido',
      text: 'Por favor ingresa un correo válido.',
    });
  }

  // Validación del número de celular
  if (phone.length < 10 || isNaN(phone)) {
    return Swal.fire({
      icon: 'error',
      title: 'Número inválido',
      text: 'El número de celular debe tener al menos 10 dígitos numéricos.',
    });
  }

  // Envío de cotización
  await handleSubmitQuote({
    email,
    phone,
    carName,
    onSuccess: (msg) => {
      Swal.fire({
        icon: 'success',
        title: '¡Cotización enviada!',
        text: msg,
        confirmButtonColor: '#28a745',
      });
      onSuccess(); // Aquí puedes limpiar el modal desde el componente
    },
    onError: (errMsg) => {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: errMsg,
        confirmButtonColor: '#d33',
      });
    },
  });
};
