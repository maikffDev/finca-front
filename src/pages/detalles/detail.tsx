// page/FincaDetalle.tsx
import { useEffect, useState } from "react";
import fincaMock from "../../data/fincaMock.json";
import { Finca } from "../../finca";
import { Galeria } from "../../components/detail/galeria/Galeria";
import { Amenitis } from "../../components/detail/amenitie/Amenities";
import { Comentarios } from "../../components/detail/comentarios/Comentario";
import { Reserva } from "../../components/detail/reserva/Reserva";
import styles from "./Detail.module.css";

export default function FincaDetalle() {
  const [finca, setFinca] = useState<Finca | null>(null);

  useEffect(() => {
    setFinca(fincaMock);
  }, []);

  if (!finca) return <p className="p-8">Cargando finca...</p>;

  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
        <div className={styles.container}>
<Galeria imagenes={finca.imagenes.map(img => img.url)} />
      <div className={styles.contenedorInfo}>
        <section >
          <h1 className="text-2xl font-bold">{finca.name}</h1>
          <p className="text-gray-600">{finca.location}</p>
          <p className="mt-2 text-gray-700">{finca.description}</p>
        <Amenitis items={finca.amenitis.map(a => a.nombre)} />
        </section>

        
      </div>
        </div>
     

      <div className={styles.containerComentarioReserva}>
    <section className={styles.containerComentario}>
        <Comentarios comentarios={finca.comentarios} />
      </section>
      <section className={styles.containerReserva}>
       <Reserva
  precio={finca.pricePerHour}
  scheduleIni={finca.schemaIni}
  scheduleEnd={finca.schemaEnd}
/>
      </section>

      </div>
      
    </main>
  );
}
