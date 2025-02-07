import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";// para el sistema de rutas de mi aplicacion

import './styles.css';
import { AppCar } from './AppCar';

ReactDOM.createRoot(document.getElementById('root')).render(
  //Stricto mode, manera segura de que trabajemos react
  <React.StrictMode>
    <BrowserRouter>
      <AppCar />
    </BrowserRouter>
  </React.StrictMode>,
)
