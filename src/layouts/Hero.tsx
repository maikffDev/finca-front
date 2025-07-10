import React, { useEffect, useState } from "react";
import { api } from "../api"; 


const Hero: React.FC = () => {
  
  const [data, setData] = useState<any[]>([]);

  
  useEffect(() => {
    
    api.get("/api/finca")
      .then((response) => {
        
        setData(response.data);
      })
      .catch((err) => {
        
        console.error("Error al obtener los datos de las fincas:", err);
      });
  }, []); 

  return (
    <div>
      <h1>Datos desde Spring Boot</h1>
      {/* Muestra los datos en formato JSON, tal como en tu código original. */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Hero;
