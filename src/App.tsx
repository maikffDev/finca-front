import { useEffect, useState } from "react";
import { api } from "./api";
import NavBar from "./layouts/Nav";

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
    </div>
  );
}

export default App;
