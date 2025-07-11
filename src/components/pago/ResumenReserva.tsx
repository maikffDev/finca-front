import React from 'react';
import styles from './Pago.module.css';

const ResumenReserva: React.FC = () => {
  return (
    <div className={styles.resumenContainer}>
      <h2 className={styles.titulo}>Resumen de Reserva</h2>
      <div className={styles.detalle}>
        <span>Noche</span>
        <span>$100</span>
      </div>
      <div className={styles.detalle}>
        <span>Noche x11</span>
        <span>$1100</span>
      </div>
      <div className={styles.detalle}>
        <span>Servicio Limpieza</span>
        <span>$200</span>
      </div>
      <a href="#" className={styles.codigoDescuento}>
        Ingresa codigo de descuento
      </a>
      <div className={styles.total}>
        <span>Pagas</span>
        <span>$1400</span>
      </div>
      <button className={styles.botonReservar}>Reservar</button>
    </div>
  );
};

export default ResumenReserva;
