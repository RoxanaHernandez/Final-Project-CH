import React,{useState} from 'react';

function ItemCount({stock, initial, onAdd}){
    
    const[cant, setCant] = useState(0);
     const increment = ()=>{
        
        if(cant<stock){
         setCant(cant+1);


        }
    };
    
    const decrement = ()=>{
        if(cant)
        setCant(cant-1);
       
    };
    return (
        <div className ="app">
            <button onClick={increment}>AGREGAR</button>
            <h1>{cant}</h1>
        
        
        <button onClick={decrement}>QUITAR</button>
        
    </div>
    );

}




export default ItemCount;
