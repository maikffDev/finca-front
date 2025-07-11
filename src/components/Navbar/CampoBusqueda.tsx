import styles from "./Navbar.module.css";
import { ChangeEvent, KeyboardEvent } from "react";

interface CampoBusquedaProps {
  valor: string;
  onCambiar: (e: ChangeEvent<HTMLInputElement>) => void;
  onPresionarEnter: (e: KeyboardEvent<HTMLInputElement>) => void;
}

const CampoBusqueda = ({ valor, onCambiar, onPresionarEnter }: CampoBusquedaProps) => (
  <div className={styles["box-search"]}>
    <svg className={styles["search-icon"]} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
    <input
      type="text"
      placeholder="Buscar"
      aria-label="Buscar"
      className={styles["search-input"]}
      value={valor}
      onChange={onCambiar}
      onKeyPress={onPresionarEnter}
    />
  </div>
);

export default CampoBusqueda;
