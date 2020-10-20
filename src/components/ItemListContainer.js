import React from 'react';
function ItemListContainer(props){

    return (
      <div>
        <h1>{props.title}</h1>
        <div style={{color:"blue", fontSize:90 }}> </div>
      </div>
    );
  }

export default ItemListContainer;