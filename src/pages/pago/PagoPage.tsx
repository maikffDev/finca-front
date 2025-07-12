import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MetodosPago from '../../components/pago/MetodosDePago';
import ResumenReserva from '../../components/pago/ResumenReserva';
import styles from '../../components/pago/Pago.module.css';

const PagoPage: React.FC = () => {
  const [isTransferDataSubmitted, setIsTransferDataSubmitted] = useState(false);
  const [comprobante, setComprobante] = useState('');
  const navigate = useNavigate();

  const importe = '1400'; 

  
  const handleTransferSubmit = (codigoComprobante: string) => {
    setComprobante(codigoComprobante);
    setIsTransferDataSubmitted(true); 
  };

  
  const handleReserveClick = () => {
   
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
        
        <MetodosPago onTransferSubmit={handleTransferSubmit} />
        
        
        <ResumenReserva
          importe={importe}
          onReserve={handleReserveClick}
          isButtonDisabled={!isTransferDataSubmitted}
        />
      </div>
    </div>
  );
};

export default PagoPage;