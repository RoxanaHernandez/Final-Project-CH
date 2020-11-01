import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/botones/ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
 
  return (
    <div className="App">
      <NavBar></NavBar>
      
      <ItemListContainer title= "PRODUCTS"/>
      <ItemCount stock={4} initial={0} onAdd={console.log()}/>
      
    </div>
  );
}

export default App;
