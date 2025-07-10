import { useEffect, useState } from "react";
import { api } from "./api";
import NavBar from "./layouts/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FincaDetalle from "./pages/detalles/detail";

function App() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    api.get("/api/finca") //
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<FincaDetalle />} />
        {/* Otras rutas aquí */}
      </Routes>
    </Router>
  );
}

export default App;
