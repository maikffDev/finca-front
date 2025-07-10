import React from 'react';
import { Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import PagoPage from '../pages/pago/PagoPage';


const routes = [
 {
   path: "/",
   element: <PagoPage/>,
 },
 /*{
   path: "/pago",
   element: <PagoPage/>,
 }*/
];

const router = createBrowserRouter(routes);

const RouterConfig: React.FC = () => {
 return <RouterProvider router={router} />;
};

export default RouterConfig;