import React, {useState, useEffect} from 'react';
import{useParams} from 'react-router-dom';
import ItemDetail from './ItemDetail'
import itemFijos from './itemFijos';



const fetchItem = (id) => new Promise((resolve, reject) => {
  return setTimeout(() => {
    return resolve(itemFijos.find((item) => item.id.toString() === id))
  }, 2000)
})


function ItemDetailContainer(){
  const {id} = useParams()
  const [ item, setItem ] = useState({})

fetchItem(id).then((result) => {
  setItem(result)
})

return (
  <div className = 'tiendita'>
      <ItemDetail item={item}></ItemDetail>
  </div>
)
};

export default ItemDetailContainer;