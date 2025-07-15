import styles from "./Navbar.module.css";

const RelojIcono = () => {
  return (
    <div
      className={styles["box-clock"]}
      role="button"
      aria-label="Abrir reloj o historial"
    >
      <svg
        className={styles.icon}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    </div>
  );
};

export default RelojIcono;
