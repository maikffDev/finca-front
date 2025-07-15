import React from "react";
import styles from "./Comentario.module.css";

interface Comentario {
  id: number;
  usuario: string;
  mensaje: string;
}

interface Props {
  comentarios: Comentario[];
}

export const Comentarios = ({ comentarios }: Props) => {
  return (
    <div className={styles.contenedor}>
      <h2 className={styles.titulo}>Comentarios</h2>

      {comentarios.map((comentario) => (
        <div key={comentario.id} className={styles.card}>
          <span className={styles.nombre}>{comentario.usuario}</span>
          <p className={styles.mensaje}>{comentario.mensaje}</p>
        </div>
      ))}
    </div>
  );
};
