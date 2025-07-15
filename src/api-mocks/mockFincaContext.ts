import { useEffect, useState } from "react";
import type { IFinca } from "../types/finca";
import { mockFincaService } from "./mockFincaService";

export const useFincaContext = () => {
  const [fincas, setFincas] = useState<IFinca[]>([]);

  const fetchAllFincas = async () => {
    console.log("Llamando a mockFincaService...");
    const data = await mockFincaService.getAllFincas();
    console.log("Datos recibidos:", data);
    setFincas(data);
  };

  useEffect(() => {
    fetchAllFincas();
  }, []);

  return {
    fincas,
    fetchAllFincas
  };
};
