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
      </div>
    </div>
  );
};

export default PagoPage;