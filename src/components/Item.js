import React from 'react';
import { Link } from 'react-router-dom';

function Item ({ id, title, price }) {
    return <Link to={`/item/${id}`}>
        <h3>{title}</h3>
        <h4>$ {price}</h4>
    </Link>
}

export default Item;