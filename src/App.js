import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home  from './components/Home';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Home greeting="Welcome to React">Coders</Home>
      <Home greeting="Bienvenidos a React"></Home>
      <ItemListContainer title="My E-Commerce"></ItemListContainer>
    </div>
  );
}

export default App;
