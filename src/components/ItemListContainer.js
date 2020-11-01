import React, {useState, useEffect} from 'react';





function ItemListContainer(){
  const APP_ID = "70b628bb";
  const APP_KEY = " 976a3af59448c1e21bef96e5ec4ce09b";
  const [recipes, setRecipes]= useState([]);
  
  useEffect(()=>{
    getRecipes();
  },[]);
  const getRecipes = async ()=> {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data =  await response.json();
    setRecipes(data.hits);
  }


return (
  <div className = 'tiendita'>
    <form className = 'search-form'>
      <input classsName ='search-bar' type='text'/>
      <button className = 'search-button' type = 'submit'>SEARCH</button>
    </form>

  </div>
)
};

export default ItemListContainer;