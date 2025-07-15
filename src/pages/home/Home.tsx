import Header from "../../components/Header/header";
import ListaDeFincas from "../../components/Home/ListaDeFincas";

import type { IFincaResponse } from "../../types/finca";
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

function Home() {
  return (
    <>
      <Header />
      <SearchBar />

      <ListaDeFincas fincas={fincasMock} />
    </>
  );
}

export default Home;
