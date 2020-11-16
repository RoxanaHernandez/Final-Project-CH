
import React, { useState, useEffect } from "react";


function ItemCount({stock, initial, onChange}){
  const [valor, setValor]= useState(0);
return <div>
<button  onClick= {()=> {
  if(valor> 0 && valor<=stock){
  setValor( valor - 1)
  onChange(valor - 1)
  }
}} style= {{margin: "5px"}} > - </button>
{valor}
  <button  onClick= {()=> {
  if(valor<stock){
  setValor( valor + 1)
  onChange(valor + 1)
  }
}} style= {{margin: "5px"}}> + </button>
<div> <button onClick={onChange} style= {{width: "120px", height:"50px", margin: "5px", border: "2px solid ",
  borderRadius: "5px" }}> Agregar </button> </div>
</div>
}
export default ItemCount;