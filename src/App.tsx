import React from 'react';
import './App.css';
import Nav from './layouts/Nav';
import Footer from './layouts/Footer';
import RouterConfig from './router/RouterConfig';
import { BrowserRouter } from 'react-router-dom';

function App() {
  
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
