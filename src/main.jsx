import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";// para el sistema de rutas de mi aplicacion

import './styles.css';
import '../src/styles/NavBarInitialPage.css';
// import '../src/styles/InitialPage.css';
import '../src/styles/CarPage.css';
import '../src/styles/Modal.css';
import '../src/styles/CarVideo.css';
import '../src/styles/LoginSeller.css';
import '../src/styles/SearchPage.css';
import '../src/styles/RegisterPage.css';
import '../src/styles/LambPage.css';
import '../src/styles/PorschePage.css';
import '../src/styles/CarCard.css';
import '../src/styles/DashboardSellerPage.css';


import { AppCar } from './AppCar';

ReactDOM.createRoot(document.getElementById('root')).render(
  //Stricto mode, manera segura de que trabajemos react
  <React.StrictMode>
    <BrowserRouter>
      <AppCar />
    </BrowserRouter>
  </React.StrictMode>,
)
