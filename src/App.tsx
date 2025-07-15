import { useEffect, useState } from "react";
import { BASE_API_URL } from "./api/api";
import NavBar from "./components/Navbar/NavBar";
import { UserProvider } from "./context/userContext";
import { FincaProvider } from "./context/fincaContext";
import RouterConfig from "./router/RouterConfig"; // <-- FALTA ESTE IMPORT

function App() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    BASE_API_URL.get("/api/finca") //
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <UserProvider>
      <FincaProvider>
      <RouterConfig />
      </FincaProvider>
      </UserProvider>
    </div>
  );
};

export default App;
