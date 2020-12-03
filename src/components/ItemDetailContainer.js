import React, {useState, useEffect} from 'react';
import{useParams} from 'react-router-dom';
import ItemDetail from './ItemDetail';

import { getFirestore } from '../firebase/indexfb';




//const fetchItem = (id) => new Promise((resolve, reject) => {
 // return setTimeout(() => {
   // return resolve(item.find((item) => item.id.toString() === id))
    
  //}, 2000)
//})

const getItemDetail = (id) => {
  const db = getFirestore();
  const itemCollection = db.collection('equipos');
  const res = itemCollection.doc(id).get()
  return res.then((doc) => {
    const data = doc.data();
    data.id = doc.id
    return data
  })
};




function ItemDetailContainer(){
 
  const [ item, setItem ] = useState({})
  const {id} = useParams()
  useEffect(() =>{
    let prom = getItemDetail(id);
    prom.then((resItems) =>{
      setItem(resItems)
    })
  }, []);
//fetchItem(id).then((result) => {
  //setItem(result)
//})

return (
  <div className = 'tiendita'>
      {item.id ? (
        <ItemDetail item={item}></ItemDetail>

      ): 'loading'}
  </div>
)
};

export default ItemDetailContainer;