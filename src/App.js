import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

const App = () => {
  const APP_ID = "ee5131a8";
  const APP_KEY = "35e1789a64f3e0e55acf315c3391c8c6";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipe();
  }, [query]);

  const getRecipe = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };
  const getSearch = e => {
    e.preventDefault();

    setQuery(search);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Hello React</h1>
        <form onSubmit={getSearch} className="searchform">
          <input
            className="form-control search-bar"
            type="text"
            value={search}
            onChange={updateSearch}
          />
          <button className="btn btn-primary search-button" type="submit">
            Search
          </button>
        </form>
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
