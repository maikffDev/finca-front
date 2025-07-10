
import React from "react";
import styles from "./Button.module.css";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  route?: string;
}

const Button: React.FC<ButtonProps> = ({ label, className, route }) => {
  const navigate = useNavigate();
  const handClick = () => {
    if(route) navigate(route)
   };
  
  const buttonClasses = `${styles.button} ${className ? styles[className] : ''
  }`;

  return (
    <button className={buttonClasses} onClick={handClick}>
      {label}
    </button>
  );
};

export default Button;