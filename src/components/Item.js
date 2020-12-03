import React from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart'

function Item({ id, title, price, image }) {
    return <Link to={`/item/${id}`}><br/>
        <h3>{title}</h3><br/>
        <h4>$ {price}</h4><br/>
        
        <img style ={{width:'696px' , height: '549px'}} src={`/images/${image}`} /><br/><br/>

        
    </Link>

}

export default Item;