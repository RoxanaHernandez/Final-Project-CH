import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/Botones/ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CartWidget from './components/CartWidget';


function App() { return (
  <Router>
  <div  className="App">
    <NavBar/>
    
    <Switch>
    <Route path="/CartWidget" exact component={CartWidget}/>
   
    <ItemListContainer title= "PRODUCTS"/>
    <ItemCount stock={4} initial={0} onAdd={console.log()}/>

    
    </Switch>
  </div>
  </Router>
);
}
 
 
export default App;
