import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from 'react-router-dom';
import {useCartContext} from '../context/CartContext';

             
             
             function CartWidget() {
                 const carrito = useCartContext()
                
    return (<div style = {{fontSize: 'large', }}>
        <Link to='/cart'>
        <span style={{ color: 'black', backgroundColor: 'white'}}>{carrito.cart.length > 0  ? carrito.cart.reduce((acc, iw) => acc+ iw.cantidad, 0) :''}</span>
        <ShoppingCartIcon/>
        </Link>
        </div>
    )
}

                
            

export default CartWidget;