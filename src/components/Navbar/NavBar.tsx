"use client";

import { useState, ChangeEvent, KeyboardEvent } from "react";
import styles from "./Navbar.module.css";

import CampoBusqueda from "./CampoBusqueda";
import IconoCalendario from "./IconoCalendario";
import BotonBusqueda from "./BotonBusqueda";
;

const BarraDeNavegacion = () => {
  const [terminoBusqueda, setTerminoBusqueda] = useState("");

  const manejarCambio = (e: ChangeEvent<HTMLInputElement>) => {
    setTerminoBusqueda(e.target.value);
  };

  const manejarEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      console.log("Buscar por Enter:", terminoBusqueda.trim());
    }
  };

  const manejarClick = () => {
    console.log("Buscar por Click:", terminoBusqueda.trim());
  };

  return (
    <div className={styles["container-background"]}>
      <div className={styles.container}>
        <IconoCalendario />
        <CampoBusqueda
          valor={terminoBusqueda}
          onCambiar={manejarCambio}
          onPresionarEnter={manejarEnter}
        />
        <BotonBusqueda onClick={manejarClick} />
      </div>
    </div>
  );
};

export default BarraDeNavegacion;
