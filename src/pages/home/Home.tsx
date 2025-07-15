import React, { useEffect } from "react";
import Header from "../../components/Header/header";

import { SearchBar } from "../../components/Home/SearchBar";
const fincasMock: IFincaResponse[] = [
  {
    id: 1,
    name: "Finca La Paz",
    location: "Mendoza",
    pricePerHour: "1200",
    active: true,
    imagesUrls: ["img1.jpg", "img2.jpg"],
  },
  {
    id: 2,
    name: "Finca El Sol",
    location: "Córdoba",
    pricePerHour: "980",
    active: true,
    imagesUrls: [],
  },
  {
    id: 3,
    name: "Finca Vista Hermosa",
    location: "San Juan",
    pricePerHour: "1500",
    active: true,
    imagesUrls: ["img3.jpg"],
  },
];

import type { IFincaResponse } from "../../types/finca";
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
<SearchBar/>
      
      {fincas.length === 0 ? (
        <LoadingContent message="Cargando fincas..." />
      ) : (
        <ListaDeFincas fincas={fincas} />
      )}

    </>
  );
};

export default Home;
