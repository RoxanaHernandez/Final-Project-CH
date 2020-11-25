import React from 'react';
import { Link } from 'react-router-dom';

function Item({ id, title, price, image }) {
    return <Link to={`/item/${id}`}>
        <h3>{title}</h3>
        <h4>$ {price}</h4>
        <h3>/images/{image}</h3>
        <img src={`/images/${image}`} />
    </Link>
}

export default Item;