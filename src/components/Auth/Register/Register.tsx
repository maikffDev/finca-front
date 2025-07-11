import { useState } from "react";
import styles from "./Register.module.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const [nombre, setNombre] = useState("");
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    setNombre("");
    setUsuario("");
    setContraseña("");
    navigate("/login");
  };

  const handleRegister = () => {
    // Aquí podrías agregar la lógica de registro real
    setNombre("");
    setUsuario("");
    setContraseña("");
    alert("Usuario registrado con éxito!");
    // Luego navegar donde quieras
  };

  return (
    <div className={styles["container-background"]}>
      <div className={styles.container}>
        <h1 className={styles.title}>Registrar Usuario</h1>

        <div className={styles["container-input"]}>
          <input
            placeholder="Nombre completo"
            className={styles.input}
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
          <input
            placeholder="Nombre de usuario"
            className={styles.input}
            onChange={(e) => setUsuario(e.target.value)}
            value={usuario}
          />
          <input
            type="password"
            placeholder="Contraseña"
            className={styles.input}
            onChange={(e) => setContraseña(e.target.value)}
            value={contraseña}
          />
        </div>

        <div className={styles["container-button"]}>
          <button className={styles.button} onClick={handleRegister}>
            Registrarse
          </button>
          <button
            className={`${styles.button} ${styles["button-secondary"]}`}
            onClick={handleLogin}
          >
            Loguearse
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
