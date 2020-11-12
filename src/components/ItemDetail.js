import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './Botones/ItemCount'



/*function ItemDetail({ item }) {
    return (
        <div>
            <h1>{item.title}</h1>
            <h2>{item.price}</h2>

        
        
            <ItemCount stock={4} initial={0} onChange={console.log()} /> 
        </div>
    )
};*/
function ItemDetail ( {item} ) {
    return <div>
        <h4> {item.title} </h4>
        <p> {item.description} </p>
        <p> {item.price} </p>
        <img src={item.img}/>
        <ItemCount stock={5} onChange={(valor) => {
            console.log(`Comprar ${valor}`)
        }
    }/>
            </div>
}

export default ItemDetail;

