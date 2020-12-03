import React, { useState, useEffect } from 'react';
import {useCartContext} from '././../context/CartContext'

function Cart(){
    const carrito =  useCartContext()
    return <div>
        {carrito.cart.map(iw => (
            <div>{iw.item.title} - {iw.item.price} - {iw.cantidad} - {parseFloat(iw.item.price) * iw.cantidad}</div>
        ))}
        <span style={{ color: 'black', backgroundColor: 'white'}}>{carrito.cart.length > 0  ? carrito.cart.reduce((acc, iw) => acc+ iw.cantidad, 0) :''}</span>
    </div> 
        
}
export default Cart;