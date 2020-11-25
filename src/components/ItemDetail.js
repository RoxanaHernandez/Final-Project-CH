
import React from 'react';
import ItemCount from './Botones/ItemCount'
import {useCartContext} from '././../context/CartContext'


export default function ItemDetail ( {item} ) {
    const {cart, add, remove} =  useCartContext()
    return <div>

        <h3> {item.title} </h3>
        <p> {item.category}</p>
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

