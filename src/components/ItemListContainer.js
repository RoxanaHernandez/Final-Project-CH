import React, {useState, useEffect} from 'react';
import ItemList from './ItemList'

import {getFirestore} from '../firebase/indexfb';



const fetchItems = () => {
  const db = getFirestore();
  const itemCollection = db.collection('equipos');
  const res = itemCollection.get()
  return res.then((querySnapshot) => {
    if(querySnapshot.size === 0){
    return [];
  
   }
     return querySnapshot.docs.map(doc=>doc.data())
})
};

function ItemListContainer(){
  const [ items, setItems ] = useState([])

fetchItems().then((result) => {
  setItems(result)
})

return (
  <div className = 'tiendita'>
      <ItemList items ={items}></ItemList>
  </div>
)
};

export  default ItemListContainer;