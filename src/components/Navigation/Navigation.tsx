import { Route, Routes } from "react-router-dom";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import Home from "../Home/Home";

function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="home" element={<Home />} />
    </Routes>
  );
}

export default Navigation;
