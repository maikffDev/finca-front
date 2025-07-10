import React from "react";
import Button from "../../Button";
import styles from "./Reserva.module.css";

interface Props {
  precio: string;
  scheduleIni: string;
  scheduleEnd: string;
}

export const Reserva = ({ precio, scheduleIni, scheduleEnd }: Props) => (
  <section className={styles.card}>
    <div className={styles.precio}>${precio}</div>

    <div className={styles.fechas}>
      <div className={styles.fecha}>
        <label>Desde:</label>
        <span>{scheduleIni}</span>
      </div>
      <div className={styles.fecha}>
        <label>Hasta:</label>
        <span>{scheduleEnd}</span>
      </div>
    </div>

    <Button label="Reservar" className={styles.boton} route="/pago" />
  </section>
);
