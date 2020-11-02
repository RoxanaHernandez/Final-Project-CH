import React, {useState, useEffect} from 'react';

const APP_ID = "70b628bb";
const APP_KEY = "ab14b1e3a39cab6e3a62dc961e36f0fd";


const getRecipes = async (strBusqueda)=> {
  const response = await fetch(`https://api.edamam.com/search?q=${strBusqueda}&app_id=${APP_ID}&app_key=${APP_KEY}`)
  const data =  await response.json();
  return data
}



function ItemListContainer(){
  const [recipes, setRecipes]= useState([]);
  const [busqueda, setBusqueda] = useState('');



return (
  <div className = 'tiendita'>
      <input className ='search-bar' type='text' value={busqueda} onChange={(evt)=>{
        setBusqueda(evt.target.value)
      }}/>
      <button className = 'search-button' onClick={async () =>{
        const data = await getRecipes(busqueda);
        setRecipes(data.hits);
      }}>SEARCH</button>

      <div>
        {recipes.map((recipe) => <div>{recipe.recipe.label}</div>)}
      </div>
  </div>
)
};

export default ItemListContainer;