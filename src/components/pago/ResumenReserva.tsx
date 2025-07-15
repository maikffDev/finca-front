import React from 'react';
import styles from './Pago.module.css';

interface ResumenReservaProps {
  importe: string;
  onReserve: () => void;
  isButtonDisabled: boolean;
}

const ResumenReserva: React.FC<ResumenReservaProps> = ({ importe, onReserve, isButtonDisabled }) => {
  return (
    <div className={styles.resumenContainer}>
      <h2 className={styles.titulo}>Resumen de la reserva</h2>
      <div className={styles.detalle}>
        <span>Alojamiento</span>
        <span>${importe}</span>
      </div>
      <div className={styles.detalle}>
        <span>Servicio</span>
        <span>$0</span>
      </div>
      <a href="#" className={styles.codigoDescuento}>¿Tienes un código de descuento?</a>
      <div className={styles.total}>
        <span>Total</span>
        <span>${importe}</span>
      </div>
      <button 
        onClick={onReserve} 
        disabled={isButtonDisabled} 
        className={styles.botonReservar}
      >
        Reservar
      </button>
    </div>
  );
};

export default ResumenReserva;