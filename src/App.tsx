import { useEffect, useState } from "react";
import { api } from "./api";
import NavBar from "./layouts/Nav";
import Home from "./components/UserProfile/UserProfile";
import './index.css';
import UserProfilePage from "./components/UserProfile/UserProfile";

function App() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    api.get("/api/finca") //
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      
      <NavBar />
      <h1>Datos desde Spring Boot</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      { /*<Lo agregue aca para ver como iba quedando, falta asignar bien el tema de las rutas, pero esto queda hecho/>*/}
      <UserProfilePage/>
    </div>
  );
}

export default App;
