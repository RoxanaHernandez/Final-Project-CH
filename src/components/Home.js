import React from 'react';
function Home(props){

    return (
      <div>
        <h1>{props.greeting}</h1>
        <div style={{color:"blue", fontSize:90 }}>{props.children} </div>
      </div>
    );
  }

export default Home;