import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../../components/pago/Pago.module.css';

const PagoExitoso: React.FC = () => {
  const location = useLocation();
  const { nroDeComprobante, importe, metodoDePago, fechaDePago } = location.state || {};

  return (
    <div className={styles.pageContainer}>
      <div className={styles.ticketContainer}>
        <h2 className={styles.titulo}>¡Pago realizado con éxito!</h2>
        <div className={styles.ticket}>
          <h3>Ticket de Pago</h3>
          <p><strong>Nro de Comprobante:</strong> {nroDeComprobante}</p>
          <p><strong>Importe:</strong> ${importe}</p>
          <p><strong>Método de Pago:</strong> {metodoDePago}</p>
          <p><strong>Fecha de Pago:</strong> {fechaDePago}</p>
        </div>
      </div>
    </div>
  );
};

export default PagoExitoso;