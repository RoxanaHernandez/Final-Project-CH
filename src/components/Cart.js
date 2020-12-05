/*import React, { useState, useEffect } from 'react';
import {useCartContext} from '././../context/CartContext'

function Cart(){
    const carrito =  useCartContext()
    return <div style={{ color: 'white',fontFamily: 'Syne Mono',  fontSize: 25, marginLeft: 50}}>
        {carrito.cart.map(iw => (
        
            
            <div>{iw.item.title} - {iw.item.price} - {iw.cantidad} - {parseFloat(iw.item.price) * iw.cantidad}</div>
            
        ))}
        
    </div> 
        
}
export default Cart;*/


import React from 'react';
import { useCartContext } from '../context/CartContext';
import { Link } from "react-router-dom";
import { getFirestore } from '../firebase/indexfb';
function Cart({ onOrder }) {
    const dataBase = getFirestore();
    const carrito = useCartContext();
    if (carrito.cart.length === 0) {
        return (
            <div>
                <h1 style={{ color: 'white', fontSize: 50, fontFamily: 'Syne Mono', marginLeft: 50 }}>CARRITO VACIO</h1>

            </div>
        )
    }
    return <div>
        <h2 style={{ color: 'white', fontSize: 25, fontFamily: 'Syne Mono', marginLeft: 50 }}> TU PEDIDO </h2>
        {carrito.cart.map((itemWrapper) => (
            <div style={{  padding: '10px', width: '300px', marginRight: 'auto', marginLeft: 'auto', marginBottom: '20px' }}>
                <div style={{ borderRadius: '50%', width: '100px', height: '100px', backgroundImage: `url('/imagenes/${itemWrapper.item.img}')`, backgroundPosition: 'center', backgroundSize: 'cover', display: 'inline-block' }}>
                </div>
                <div ><h3 style={{ color: 'white', fontSize: 25, fontFamily: 'Syne Mono', marginLeft: 50 }}>{itemWrapper.item.title}</h3></div>
                <hr />
                <div> <h3  style={{ color: 'white', fontSize: 25, fontFamily: 'Syne Mono', marginLeft: 50 }}>PRECIO GENERAL:  ${itemWrapper.item.price} </h3></div>
                <div> <h3 style={{ color: 'white', fontSize: 25, fontFamily: 'Syne Mono', marginLeft: 50 }}>CANTIDAD:  {itemWrapper.cantidad}</h3> </div>
            </div>
        ))}
        <div style={{  padding: '10px', width: '200px', marginRight: 'auto', marginLeft: 'auto', marginBottom: '20px' }}> <h3 style={{ color: 'white', fontSize: 25, fontFamily: 'Syne Mono', marginLeft: 50 }}>Total: ${carrito.cart.reduce((acc, iw) => acc + iw.cantidad * iw.item.price, 0)}</h3></div>
        <Link to='/shopping'>
            <button
                type="button"
                style={{color: 'black', fontSize: 25, fontFamily: 'Syne Mono', marginLeft: 50, width: "150px", height: "50px", margin: '10px' }}> <h3>COMPRAR</h3> </button>
        </Link>
    </div>
}
export default Cart;

