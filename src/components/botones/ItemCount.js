
import React, { useState, useEffect } from "react";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { Radio } from "@material-ui/core";


/*function ItemCount({stock, initial, onChange}){
    
    const[cant, setCant] = useState(initial);
     const increment = ()=>{
        
        if(cant<stock){
         setCant(cant+1);
         onChange(cant+1);
         

        }
        function onChange (){
            console.log(cant);
        };
    };
    
    const decrement = ()=>{
        if(cant)
        setCant(cant-1);
        onChange(cant-1);
        
    
       
    }
    function onChange(){

console.log(cant)
    }
   
    return (
        
        <div className='App'>
            <button onClick={increment}>AGREGAR</button>
            <h1>{cant}</h1>
        
        <button  onClick={decrement}>QUITAR</button>
        
    </div>
    
    );

}*/








function ItemCount({stock, initial, onChange}){
  const [valor, setValor]= useState(0);
return <div>
<button onClick= {()=> {
  if(valor> 0 && valor<=stock){
  setValor( valor - 1)
  onChange(valor - 1)
  }
}} style= {{margin: "5px"}} > - </button>
{valor}
  <button onClick= {()=> {
  if(valor<stock){
  setValor( valor + 1)
  onChange(valor + 1)
  }
}} style= {{margin: "5px"}}> + </button>
<div> <button onClick={onChange} style= {{width: "120px", height:"50px", margin: "5px"  }}> Agregar </button> </div>
</div>
}
export default ItemCount;