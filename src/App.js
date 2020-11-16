import React from 'react';

import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import Home from './components/Home';
import {CartContext} from './context/CartContext';

function App() {
  return (
    <CartContext.Provider value ={[]}>
    <Router>
      <div className="App">
        <NavBar />

        <Switch>
          <Route path="/list" exact component={ItemListContainer} />
          <Route path="/item/:id" component={ItemDetailContainer} />
          <Route path="/" exact component={Home} />
        </Switch>
        



      </div>
    </Router>
    </CartContext.Provider>
  );
}


export default App;
