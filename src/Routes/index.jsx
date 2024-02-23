/**
 *  @version 1.0.1
 *  @author alexis
 *  @description Manejo de todas las rutas de la aplicación
 * 	@process 3
 */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./private";
import { LoginPage } from "../pages/LoginPage";
import { path } from "../configuracion";
import { HomePage } from "../pages/Home/HomePage";


const routes = [
    // {path: "/login", element: <LoginPage /> },
];

const RoutesModule = () => (
 
    <BrowserRouter basename={path}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/feed" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<PrivateRoute />} exact>
              {routes.map((route, idx) => (  <Route key={idx} path={route.path} exact element={route.element} />  ))}
          </Route>
        </Routes>
    </BrowserRouter>

);

export default RoutesModule;
