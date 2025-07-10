import React from 'react';
import './App.css';
import Nav from './layouts/Nav';
import Footer from './layouts/Footer';
import RouterConfig from './router/RouterConfig';
import { BrowserRouter } from 'react-router-dom';

function App() {
  // App.tsx ahora es solo el contenedor principal.
  // La lógica de las páginas está en sus propios componentes.
  return (
    
      <div className="App">
        <Nav />
        <main>
          <RouterConfig />
        </main>
        <Footer />
      </div>
    
  );
}

export default App;
