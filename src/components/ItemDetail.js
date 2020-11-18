import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './Botones/ItemCount'
import {useCartContext} from '././../context/CartContext'


export default function ItemDetail ( {item} ) {
    const {cart, add, remove} =  useCartContext()
    return <div>

        <h4> {item.title} </h4>
        <p> {item.description} </p>
        <p> {item.price} </p>
        <img src={item.img}/>
        <ItemCount stock={5} onChange={(valor) => {
            console.log(`Agregar ${valor}`)
        }
    }/>
        {cart.find(it => it.id === item.id)
            ? <button onClick={() => remove(item.id)}>Quitar</button>
            : <button onClick={() => add(item)}>Agregar</button>}
            </div>
}

;

