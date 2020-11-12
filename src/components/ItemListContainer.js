import React, {useState, useEffect} from 'react';
import ItemList from './ItemList'
import itemsFijos from './itemFijos'

const APP_ID = "70b628bb"; 
const APP_KEY = "ab14b1e3a39cab6e3a62dc961e36f0fd";




const fetchItems = () => new Promise((resolve, reject) => {
  return setTimeout(() => {
    return resolve(itemsFijos)
  }, 2000)
})


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

export default ItemListContainer;