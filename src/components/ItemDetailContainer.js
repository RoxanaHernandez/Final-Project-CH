import React, {useState, useEffect} from 'react';
import{useParams} from 'react-router-dom';
import ItemDetail from './ItemDetail';
import Item from './Item';




//const fetchItem = (id) => new Promise((resolve, reject) => {
 // return setTimeout(() => {
   // return resolve(item.find((item) => item.id.toString() === id))
    
  //}, 2000)
//})
const getItemDetail =(id)=> {
  return new Promise((res, rej)=>{
    setTimeout(() => {
      res(Item[id]); 
      
    },2000);
  })
}


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
      <ItemDetail item={item}></ItemDetail>
  </div>
)
};

export default ItemDetailContainer;