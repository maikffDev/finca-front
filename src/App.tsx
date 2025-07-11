import "./App.css";
import { FincaProvider } from "./context/fincaContext";
import { UserProvider } from "./context/userContext";

import RouterConfig from "./router/RouterConfig";

const App: React.FC = () => {
  return (
    <div className="App">
      <UserProvider>
      <FincaProvider>
      <RouterConfig />
      </FincaProvider>
      </UserProvider>
    </div>
  );
};

export default App;
