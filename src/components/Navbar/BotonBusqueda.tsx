import styles from "./Navbar.module.css";

interface BotonBusquedaProps {
  onClick: () => void;
}

const BotonBusqueda = ({ onClick }: BotonBusquedaProps) => (
  <div className={styles["box-button"]}>
    <button
      type="button"
      className={styles["search-button"]}
      onClick={onClick}
      aria-label="Buscar"
    >
      <svg className={styles["button-icon"]} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    </button>
  </div>
);

export default BotonBusqueda;
