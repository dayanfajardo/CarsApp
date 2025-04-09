export const handleSubmitQuote = async ({ email, phone, carName, onSuccess, onError }) => {
  try {
    const resp = await fetch('http://localhost:5000/api/quotes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, phone, carName })
    });

    const body = await resp.json();

    if (!body.ok) {
      return onError(body.msg || 'Error al crear cotización');
    }

    onSuccess(body.msg || 'Cotización creada exitosamente');
  } catch (error) {
    console.error('Error en la petición:', error);
    onError('Error del servidor. Intenta más tarde.');
  }
};
