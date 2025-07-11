import { MoreHorizontal, Droplet, Settings, FileText } from "lucide-react";
import styles from "./home.module.css";
import { IFincaResponse } from "../../types/finca";

interface Props {
  finca: IFincaResponse;
}

const TarjetaFinca: React.FC<Props> = ({ finca }) => {
  const { name, location, pricePerHour, imagesUrls } = finca;

  return (
    <div className={styles.card}>
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

      <div className={styles.cardIcons}>
        <Droplet size={32} className={styles.icon} />
        <Settings size={32} className={styles.icon} />
        <FileText size={32} className={styles.icon} />
      </div>

      <div className={styles.cardContent}>
        <h4 className={styles.cardTitle}>${pricePerHour} / hora</h4>
        <p className={styles.cardSubtitle}>
          {imagesUrls.length > 0 ? "Imágenes disponibles" : "Sin imágenes"}
        </p>
      </div>

      <button className={styles.seeMoreButton}>Ver más</button>
    </div>
  );
};

export default TarjetaFinca;
