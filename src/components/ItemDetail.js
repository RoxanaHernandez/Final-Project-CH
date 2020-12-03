
import React, { useState } from 'react';
import ItemCount from './Botones/ItemCount'
import {useCartContext} from '././../context/CartContext'



export default function ItemDetail ( {item} ) {
    const {cart, add, remove} =  useCartContext()
    const [cantidad, setCantidad] = useState(0)
    return <div style = {{ color: 'white',fontSize: 25, fontFamily: 'Syne Mono', marginLeft: 50 }}>

        <h3> {item.title} </h3><br></br>
        <p> {item.category}</p><br></br>
        <p> {item.description} </p><br></br>
        <p> ${item.price} </p><br></br>
        <img src={item.img}/><br></br>
        <ItemCount stock={item.stock} onChange={(valor) => {
            setCantidad(valor)
            
        }
    }/>
        {cart.find(iw => iw.item.id === item.id)
            ? <button onClick={() => remove(item.id)}>Quitar</button>
            : <button onClick={() => add({
                item,
                cantidad
                })}>Agregar</button>}
            </div>
}

;

