import React from "react";
import styles from "./LoadingContent.module.css";

interface LoadingContentProps {
  message?: string;
}

const LoadingContent: React.FC<LoadingContentProps> = ({
  message = "Cargando...",
}) => (
  <main className={styles.container}>
    <div className={styles.spinner}></div>
    <p className={styles.message}>{message}</p>
  </main>
);

export default LoadingContent;