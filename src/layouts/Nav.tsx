import React from "react";
import Button from "../components/Button";
import styles from "./Nav.module.css";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.actions}>
        <Button label="Registrarse" className="registrarse" />
        <Button label="Iniciar sesión" className="iniciarSesion" />
      </div>
    </nav>
  );
};

export default Navbar;