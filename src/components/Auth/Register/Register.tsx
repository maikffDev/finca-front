import { useState } from "react";
import "./RegisterStyle.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const [nombre, setNombre] = useState("");
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const navigate = useNavigate();



    const handleLogin = () => {
    setNombre ("")
    setContraseña("")
    navigate ('/login')
    
  };

  return (
    <div className="container-background">
      <div className="container">
        <h1 className="title">Registrar Usuario</h1>

        <div className="container-input">
          <input
            placeholder="Nombre completo"
            className="input"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />

          <input
            placeholder="Nombre de usuario"
            className="input"
            onChange={(e) => setUsuario(e.target.value)}
            value={usuario}
          />

          <input
            type="password"
            placeholder="Contraseña"
            className="input"
            onChange={(e) => setContraseña(e.target.value)}
            value={contraseña}
          />

          <p className="text">¿Olvidaste tu contraseña?</p>
        </div>

        <div className="container-button">
          <button className="button" >
            Registrarse
          </button>
                <button className="button" onClick={handleLogin}>
          Loguearse
        </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
