import { useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [nombre, setNombre] = useState("");
  const [contraseña, setContraseña] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    setNombre("");
    setContraseña("");
    navigate("/home");
  };

  const handleRegister = () => {
    setNombre("");
    setContraseña("");
    navigate("/register");
  };

  return (
    <div className={styles["container-background"]}>
      <div className={styles.container}>
        <div className={styles["logo-container"]}>
          <div className={styles.logo}>
            <span className={styles["logo-text"]}>G&L</span>
            <span className={styles["logo-subtitle"]}>Reservas</span>
          </div>
        </div>

        <div className={styles["container-input"]}>
          <input
            placeholder="email"
            className={styles.input}
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
          <input
            type="password"
            placeholder="password"
            className={styles.input}
            onChange={(e) => setContraseña(e.target.value)}
            value={contraseña}
          />
        </div>

        <div className={styles["container-button"]}>
          <button
            className={`${styles.button} ${styles["button-primary"]}`}
            onClick={handleLogin}
          >
            Ingresar
          </button>
          <button
            className={`${styles.button} ${styles["button-secondary"]}`}
            onClick={handleRegister}
          >
            Crear cuenta
          </button>
        </div>

        <p className={styles["help-text"]}>¿Necesitas Ayuda?</p>
      </div>
    </div>
  );
}

export default Login;
