import React,{useState} from 'react'

function ItemCount({stock, initial, onAdd}){
    const [valor, setValor]= useState(0);

return <div> <button onClick= {()=> {
    if(valor<stock){
    setValor( valor + 1)
    }
}} style= {{margin: "5px"}}> + </button>

{valor}

<button onClick= {()=> {
    if(valor> 0 && valor<=stock){
    setValor( valor - 1)
    }
}} style= {{margin: "5px"}} > - </button> 

<div> <button onClick={onAdd} style= {{width: "120px", height:"20px", margin: "5px" }}> Agregar </button> </div>



</div>


}

export default ItemCount;
