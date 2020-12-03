import React from 'react';

import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import Home from './components/Home';
import CartProvider, { CartContext } from './context/CartContext';
import Footer from './components/Footer'
import Cart from './components/Cart';

function App() {
  return (
    //en esta linea sacamos el defaulrt y lo ponemos en nel CartContext
    <CartProvider /*defaultCart={[]}*/>
      <Router>
        <div className="App" style={{ backgroundImage: 'url(/images/rope.jpg)' }}>
          
          <NavBar />
         
          <Switch>
            <Route path="/list" exact component={ItemListContainer} />
            <Route path="/item/:id" component={ItemDetailContainer} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/" exact component={Home} />
          </Switch>
          
          <Footer />
          

        </div>
      </Router>
    </CartProvider>
  );
}


export default App;
