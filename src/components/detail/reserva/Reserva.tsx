import React from "react";
import Button from "../../Button/Button";
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

    {/* Envolvemos el botón para aplicarle el estilo */}
    <div className={styles.boton}>
      <Button label="Reservar" route="/pago" />
    </div>
  </section>
);

