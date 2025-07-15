import React, { useEffect } from "react";
import Header from "../../components/Header/header";
import BarraDeNavegacion from "../../components/Navbar/NavBar";
import ListaDeFincas from "../../components/Home/ListaDeFincas";
import LoadingContent from "../../components/Loading/LoadingContent";
import { useFincaContext } from "../../api-mocks/mockFincaContext"; // aca solo deberiamos cambiar el import al context cuando este el backend y listo todo solucionado, esto ya anda



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
