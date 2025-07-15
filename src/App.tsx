import { useEffect, useState } from "react";
import { BASE_API_URL } from "./api/api";
import NavBar from "./components/Navbar/NavBar";

function App() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    BASE_API_URL.get("/api/finca") //
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <NavBar />
      <h1>Datos desde Spring Boot</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default App;
