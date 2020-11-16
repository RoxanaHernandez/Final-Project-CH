import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './Botones/ItemCount'



export default function ItemDetail ( {item} ) {
    return <div>
        <h4> {item.title} </h4>
        <p> {item.description} </p>
        <p> {item.price} </p>
        <img src={item.img}/>
        <ItemCount stock={5} onChange={(valor) => {
            console.log(`Agregar ${valor}`)
        }
    }/>
            </div>
}

;

