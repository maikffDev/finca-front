import React from 'react';
import styles from './Pago.module.css';

<<<<<<< HEAD
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
=======
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
>>>>>>> 3a92ff8 (Feat: Se añadio la vista de Pago exitoso y demas funcionalidades de Pago)
    </div>
  );
};

<<<<<<< HEAD
export default ResumenReserva;
=======
export default ResumenReserva;
>>>>>>> 3a92ff8 (Feat: Se añadio la vista de Pago exitoso y demas funcionalidades de Pago)
