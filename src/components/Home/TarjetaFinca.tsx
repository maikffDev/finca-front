import { MoreHorizontal, Droplet, Settings, FileText } from "lucide-react";
import styles from "./home.module.css";

import type { IFinca } from "../../types/finca";
import VerMasButton from "./Button/VerMasButton ";


interface Props {
  finca: IFinca;
}

const TarjetaFinca: React.FC<Props> = ({ finca }) => {
  const { name, location, pricePerHour, imagesUrls } = finca;

  const cover = imagesUrls[0] ?? "https://via.placeholder.com/400x250?text=Sin+imagen";

  return (
    <div className={styles.card}>
      {/* Header con título y ubicación */}
      <div className={styles.cardHeader}>
        <div className={styles.cardHeaderContent}>
          <div className={styles.cardHeaderText}>
            <h3 className={styles.cardHeaderTitle}>{name}</h3>
            <p className={styles.cardHeaderSubtitle}>{location}</p>
          </div>
          <div className={styles.cardAvatar}>
            <span>{name.charAt(0)}</span>
          </div>
        </div>
        <button className={styles.menuButton} aria-label="Más opciones">
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* Imagen */}
      <img src={cover} alt={`Imagen de ${name}`} className={styles.cardImage} />

    
      {/* Precio + info */}
      <div className={styles.cardContent}>
        <h4 className={styles.cardTitle}>${pricePerHour} / hora</h4>
        <p className={styles.cardSubtitle}>
          
        </p>
      </div>

      <VerMasButton to="/fincadetalles" />
    </div>
  );
};



export default TarjetaFinca;



/*

      <div className={styles.cardIcons}>
        <Droplet size={32} className={styles.icon} />
        <Settings size={32} className={styles.icon} />
        <FileText size={32} className={styles.icon} />
      </div>


*/ 
