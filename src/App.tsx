import "./App.css";
import { UserProvider } from "./context/userContext";

import RouterConfig from "./router/RouterConfig";

const App: React.FC = () => {
  return (
    <div className="App">
      <UserProvider>
      <RouterConfig />
      </UserProvider>
    </div>
  );
};

export default App;
