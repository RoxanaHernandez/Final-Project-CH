import React, { useState, useEffect } from 'react';
import ItemList from './ItemList'

import { getFirestore } from '../firebase/indexfb';

const stilo = {
width: '100%',
height: 'auto'
}

const fetchItems = (categoryId) => {
  const db = getFirestore();
  const itemCollection = db.collection('equipos');
  let res;
  if(categoryId) {
    res = itemCollection.where('categoryId','==', categoryId).get();
  } else {
    res = itemCollection.get();

  }

  return res.then((querySnapshot) => {
    if (querySnapshot.size === 0) {
      return [];

    }
    return querySnapshot.docs.map((doc, id) => {
      const data = doc.data()
      data.id = doc.id
      return data
    })
  })
};

function ItemListContainer({ categoryId }) {
  const [items, setItems] = useState([])
  useEffect(() => {
    fetchItems(categoryId).then((result) => {
      console.log(result)
      setItems(result)
    })
  }, [categoryId])

  return (
    <div className='tiendita'>
      <ItemList items={items}></ItemList>
    </div>
  )
};

export default ItemListContainer;