import React from 'react';
import './App.css';
import Rotas from './Routes';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Rotas/>
    
    </BrowserRouter>
  );
}

export default App;
