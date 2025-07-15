import React, { useState } from "react";
import styles from "./Galeria.module.css";

interface GaleriaProps {
  imagenes: string[];
  maxVisibleThumbnails?: number;
}

export const Galeria = ({ imagenes, maxVisibleThumbnails = 5 }: GaleriaProps) => {
  const [selectedImage, setSelectedImage] = useState(imagenes[0]);

  if (!imagenes || imagenes.length === 0) return null;

  const visibleThumbnails = imagenes.slice(0, maxVisibleThumbnails);
  const remainingCount = imagenes.length - maxVisibleThumbnails;

  return (
    <div className={styles.container}>
      {/* Miniaturas a la derecha */}
      <div className={styles.thumbnails}>
        {visibleThumbnails.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Miniatura ${index + 1}`}
            onClick={() => setSelectedImage(img)}
            className={`${styles.thumbnail} ${
              selectedImage === img ? styles.active : ""
            }`}
          />
        ))}
        {remainingCount > 0 && (
          <div className={styles.more}>+{remainingCount}</div>
        )}
      </div>

      {/* Imagen principal */}
      <div className={styles.mainImageContainer}>
        <img
          src={selectedImage}
          alt="Imagen principal"
          className={styles.mainImage}
        />
      </div>
    </div>
  );
};
