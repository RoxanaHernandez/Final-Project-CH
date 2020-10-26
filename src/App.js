import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home  from './components/Home';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/botones/ItemCount';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Home greeting="Welcome to React">Coders</Home>
      <Home greeting="Bienvenidos a React"></Home>
      <ItemListContainer title="My E-Commerce"></ItemListContainer>
      <ItemCount initial="" min="1" max="5" onAdd="">1</ItemCount>
      
    </div>
  );
}

export default App;
