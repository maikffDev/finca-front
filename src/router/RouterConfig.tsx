import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PagoPage from '../pages/pago/PagoPage';
import Login from '../components/Auth/Login/Login';
import Register from '../components/Auth/Register/Register';
import Home from '../components/Home/Home';


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
 }

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