import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../home.module.css";

interface VerMasButtonProps {
  to: string; // ruta a donde redirigir
}

const VerMasButton: React.FC<VerMasButtonProps> = ({ to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <button className={styles.seeMoreButton} onClick={handleClick}>
      Ver más
    </button>
  );
};

export default VerMasButton;
