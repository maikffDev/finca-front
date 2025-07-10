import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PagoPage from '../pages/pago/PagoPage';
import Hero from '../layouts/Hero'; // Usamos Hero como la página de inicio

const RouterConfig: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/pago" element={<PagoPage />} />
      {/* Agrega más rutas aquí en el futuro */}
    </Routes>
  );
};

export default RouterConfig;
