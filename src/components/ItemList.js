import React from 'react';
import Item from './Item';


function ItemList ({ items }) {
    return <div>
        {items.map(item => <Item key={item.id} id={item.id} title={item.title} price={item.price} image={item.image}></Item>)}
    </div>
}

export default ItemList;