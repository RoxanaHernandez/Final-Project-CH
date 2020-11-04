import React, {useState, useEffect} from 'react';
import './App.css'
import {Link} from 'react-router-dom';


function ItemDetail(){
    useEffect(()=>{
        fetchItem();
    }, []);
    
  const [recipe, setRecipe]= useState([]);
  
  const fetchItem = async ()=> {
 
};


return (
  <div>
      {item.map(item=>(
          <h1 key={}>
              <Lin to={`/ItemListContainer/${item}`}>{item}</Link>
          </h1>
      ))}
  </div>
)
};

export default ItemDetail;