<<<<<<< HEAD
import React from 'react';
import HeaderPago from '../../components/pago/HeaderPago';
import MetodosDePago from '../../components/pago/MetodosDePago';
import ResumenReserva from '../../components/pago/ResumenReserva';
import styles from '../../components/pago/Pago.module.css'

const PagoPage: React.FC = () => {
  return (
    <div className={styles.pageContainer}>
      <HeaderPago />
      <div className={styles.contentContainer}>
        <MetodosDePago />
        <ResumenReserva />
=======
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MetodosPago from '../../components/pago/MetodosDePago';
import ResumenReserva from '../../components/pago/ResumenReserva';
import styles from '../../components/pago/Pago.module.css';

const PagoPage: React.FC = () => {
  const [isTransferDataSubmitted, setIsTransferDataSubmitted] = useState(false);
  const [comprobante, setComprobante] = useState('');
  const navigate = useNavigate();

  const importe = '1400'; // El importe es estático por ahora

  // Esta función se activa desde el pop-up de MetodosDePago
  const handleTransferSubmit = (codigoComprobante: string) => {
    setComprobante(codigoComprobante);
    setIsTransferDataSubmitted(true); // Marcamos que el dato se ha enviado
  };

  // Esta función se llama desde el botón "Reservar" en ResumenReserva
  const handleReserveClick = () => {
    // Solo navegamos si los datos de transferencia se han enviado
    if (isTransferDataSubmitted) {
      navigate('/pago-exitoso', {
        state: {
          nroDeComprobante: comprobante,
          importe: importe,
          metodoDePago: 'Transferencia',
          fechaDePago: new Date().toLocaleDateString(),
        },
      });
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentContainer}>
        {/* Pasamos la función para que el hijo nos notifique */}
        <MetodosPago onTransferSubmit={handleTransferSubmit} />
        
        {/* Pasamos el importe, la función de reserva y si el botón debe estar deshabilitado */}
        <ResumenReserva
          importe={importe}
          onReserve={handleReserveClick}
          isButtonDisabled={!isTransferDataSubmitted}
        />
>>>>>>> 3a92ff8 (Feat: Se añadio la vista de Pago exitoso y demas funcionalidades de Pago)
      </div>
    </div>
  );
};

export default PagoPage;