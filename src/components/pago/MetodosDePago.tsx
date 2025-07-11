import React, { useState } from 'react';
import styles from './Pago.module.css';


const TransferenciaIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11.5A4.5 4.5 0 0 1 7.5 7H21"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 12.5A4.5 4.5 0 0 1 16.5 17H3"></path></svg>
);
const ArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
);


interface MetodosPagoProps {
  onTransferSubmit: (comprobante: string) => void;
}

const MetodosPago: React.FC<MetodosPagoProps> = ({ onTransferSubmit }) => {
  const [showModal, setShowModal] = useState(false);
  const [comprobante, setComprobante] = useState('');

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleContinuar = () => {
    // llama a la función del padre con el codigo del comprobante
    onTransferSubmit(comprobante);
    // cierra el pop up
    handleCloseModal();
  };

  return (
    <div className={styles.metodosContainer}>
      <h2 className={styles.titulo}>Elige tu método de pago</h2>
      <div className={styles.metodoItem} onClick={handleOpenModal}>
        <div className={styles.metodoInfo}>
          <TransferenciaIcon />
          <span>Transferencia</span>
        </div>
        <ArrowIcon />
      </div>

      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h2>Datos para la Transferencia</h2>
            <p>CBU: 1234567890123456789012</p>
            <p>Alias: FINCA.HEXAGONAL</p>
            <input
              type="text"
              placeholder="Código de comprobante"
              value={comprobante}
              onChange={(e) => setComprobante(e.target.value)}
              className={styles.modalInput}
            />
            <div className={styles.modalButtons}>
              <button onClick={handleCloseModal} className={styles.modalButton}>
                Cancelar
              </button>
              <button
                onClick={handleContinuar}
                disabled={!comprobante}
                className={styles.modalButton}
              >
                Continuar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MetodosPago;