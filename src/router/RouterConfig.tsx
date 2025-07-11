import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PagoPage from '../pages/pago/PagoPage';
import Login from '../components/Auth/Login/Login';
import Register from '../components/Auth/Register/Register';
import Home from '../pages/home/Home';
<<<<<<< HEAD


=======
import PagoExitoso from '../pages/pago/PagoExitoso';
>>>>>>> 3a92ff8 (Feat: Se añadio la vista de Pago exitoso y demas funcionalidades de Pago)

const routes = [
 {
   path: "/pagoreserva",
   element: <PagoPage/>,
   
 },
 {
  path: "/",
  element: <Login/>,
 },

  {
  path: "/login",
  element: <Login/>,
 },
  {
  path: "/register",
  element: <Register/>,
 },
  {
  path: "/home",
  element: <Home/>,
<<<<<<< HEAD
 }

 /*{
   path: "/pago",
   element: <PagoPage/>,
 }*/
=======
 },
 {
    path: "/pago-exitoso",
    element: <PagoExitoso />,
  }
>>>>>>> 3a92ff8 (Feat: Se añadio la vista de Pago exitoso y demas funcionalidades de Pago)
];

const router = createBrowserRouter(routes);

const RouterConfig: React.FC = () => {
 return <RouterProvider router={router} />;
};

export default RouterConfig;