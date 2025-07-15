// src/context/fincaContext.tsx
import {createContext,useContext,useState,useEffect, type ReactNode,} from "react";
import {createFinca, deleteFinca,getAllFincas,getFincaById,getFincaByUsername,logicalDeletionFinca,updateFinca,} from "../api/finca-api";
import type { IFinca, IFincaRequest } from "../types/finca";

//TODO , aca fijate que tenes que hacer el tema de los errores para que se alineen con un componente de pop up rojo 
// para mostrar los errores la usuario . borrar los console.error una vez hecho el componente

interface FincaContextType {
  finca: IFinca | null;
  fincas: IFinca[];
  fetchAllFincas: () => Promise<void>;
  getFincaByIdContext: (id: number) => Promise<void>;
  getFincaByUsernameContext: (username: string) => Promise<void>;
  createNewFinca: (finca: IFincaRequest) => Promise<void>;
  updateExistingFinca: (id: number, finca: IFincaRequest) => Promise<void>;
  deleteFincaById: (id: number) => Promise<void>;
  logicalDeleteFincaById: (id: number) => Promise<void>;
}

const FincaContext = createContext<FincaContextType | undefined>(undefined);

export const FincaProvider = ({ children }: { children: ReactNode }) => {
  const [finca, setFinca] = useState<IFinca | null>(null);
  const [fincas, setFincas] = useState<IFinca[]>([]);
  

  useEffect(() => {
    fetchAllFincas();
  }, []);

  const fetchAllFincas = async () => {
    try {
      const data = await getAllFincas();
      setFincas(data);
    } catch (error) {
      console.error("Error al obtener las fincas", error);
    }
  };

  const getFincaByIdContext = async (id: number) => {
    try {
      const data = await getFincaById(id);
      setFinca(data);
    } catch (error) {
      console.error("Error al obtener finca por ID", error);
    }
  };

  const getFincaByUsernameContext = async (username: string) => {
    try {
      const data = await getFincaByUsername(username);
      setFinca(data);
    } catch (error) {
      console.error("Error al obtener finca por username", error);
    }
  };

  const createNewFinca = async (fincaReq: IFincaRequest) => {
    try {
      const newFinca = await createFinca(fincaReq);
      setFincas((prev) => [...prev, newFinca]);
    } catch (error) {
      console.error("Error al crear finca", error);
    }
  };

  const updateExistingFinca = async (id: number, fincaReq: IFincaRequest) => {
    try {
      const updated = await updateFinca(id, fincaReq);
      setFincas((prev) =>
        prev.map((f) => (f.id === updated.id ? updated : f))
      );
      setFinca(updated);
    } catch (error) {
      console.error("Error al actualizar finca", error);
    }
  };

  const deleteFincaById = async (id: number) => {
    try {
      await deleteFinca(id);
      setFincas((prev) => prev.filter((f) => f.id !== id));
      setFinca(null);
    } catch (error) {
      console.error("Error al eliminar finca", error);
    }
  };

  const logicalDeleteFincaById = async (id: number) => {
    try {
      const deleted = await logicalDeletionFinca(id);
      setFincas((prev) =>
        prev.map((f) => (f.id === deleted.id ? deleted : f))
      );
      setFinca(deleted);
    } catch (error) {
      console.error("Error en eliminación lógica", error);
    }
  };

  return (
    <FincaContext.Provider
      value={{
        finca,
        fincas,
        fetchAllFincas,
        getFincaByIdContext,
        getFincaByUsernameContext,
        createNewFinca,
        updateExistingFinca,
        deleteFincaById,
        logicalDeleteFincaById,
      }}
    >
      {children}
    </FincaContext.Provider>
  );
};

export const useFincaContext = () => {
  const context = useContext(FincaContext);
  if (!context) {
    throw new Error("useFincaContext debe usarse dentro de un FincaProvider");
  }
  return context;
};
