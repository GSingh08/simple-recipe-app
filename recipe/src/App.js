import React, {useEffect, useState} from 'react';
import Recipe from "./Recipe";
import './App.css';

const App = () => {
  const API_ID = "2ab573ca";
  const API_KEY = "75dfe5cf6e657c59137ec5aad18caae5";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState ('chicken');


  //runs everytime our page renders but we can maniupale it to only happen once 
  useEffect(() =>{
    getRecipes();
  }, [query])

  //This is fetching our data
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search)
    setSearch('');
  }

  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" 
        value={search} 
        onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe =>(
        <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image} 
        ingredients={recipe.recipe.ingredients}
        url={recipe.recipe.url} />
      ))}
      </div>
    </div>
  )
}

export default App;
