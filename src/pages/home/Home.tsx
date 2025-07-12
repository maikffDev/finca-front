import React, { useEffect } from "react";
import Header from "../../components/Header/header";
import BarraDeNavegacion from "../../components/Navbar/NavBar";
import ListaDeFincas from "../../components/Home/ListaDeFincas";
import { useFincaContext } from "../../context/fincaContext";
import LoadingContent from "../../components/Loading/LoadingContent";


const Home: React.FC = () => {
  const { fincas, fetchAllFincas } = useFincaContext();

  useEffect(() => {
    if (fincas.length === 0) {
      fetchAllFincas();
    }
  }, [fincas.length, fetchAllFincas]);

  return (
    <>
      <Header />
      <BarraDeNavegacion />
      {fincas.length === 0 ? (
        <LoadingContent message="Cargando fincas..." />
      ) : (
        <ListaDeFincas fincas={fincas} />
      )}
    </>
  );
};

export default Home;
