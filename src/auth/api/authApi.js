import axios from 'axios';

const authApi = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Interceptor para agregar el token en cada petición
authApi.interceptors.request.use(config => {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers['x-token'] = token; // Aquí usamos el header esperado por tu backend
  }

  return config;
});

export default authApi;
