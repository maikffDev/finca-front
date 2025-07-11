import { IFincaResponse } from "../../types/finca";
import styles from "./home.module.css";
import TarjetaFinca from "./TarjetaFinca";


interface Props {
  fincas: IFincaResponse[];
}

const ListaDeFincas: React.FC<Props> = ({ fincas }) => {
  return (
    <div className={styles.cardsSection}>
      <div className={styles.cardsGrid}>
        {fincas.map((finca) => (
          <TarjetaFinca key={finca.id} finca={finca} />
        ))}
      </div>
    </div>
  );
};

export default ListaDeFincas;
