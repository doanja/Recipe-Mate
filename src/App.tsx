import React, { useState, useEffect } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import { SearchBar } from './components/SearchBar';

import API, { RecipeService } from './services/recipe';
import { RecipeResults } from './components/RecipeResults';
import { RecipeContainer } from './components/RecipeContainer';

const App: React.FC = () => {
  const client = new RecipeService('695d34427006452f835927d8591a5f3d');

  const [recipes, setRecipes] = useState<Array<Recipe>>([]); // array of recipes
  const [recipeIds, setRecipeIds] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [startingOffset, setStartingOffset] = useState(0);
  const [endingOffset, setEndingOffset] = useState(2);
  const [recipe, setRecipe] = useState<Recipe | undefined>(undefined); // used for the single detailed recipe

  useEffect(() => {
    getRecipe('cake');
  }, []);

  useEffect(() => {
    if (searchQuery) getRecipe(searchQuery, startingOffset, endingOffset);
  }, [startingOffset, endingOffset]);

  useEffect(() => {
    let stuff: Array<Recipe> = recipeIds.map(id => client.getRecipeById(id));
    setRecipes(stuff);
  }, [recipeIds]);

  const getRecipe: getRecipe = (
    query,
    cuisine,
    diet,
    excludeIngrediuents,
    intolerances,
    apiKey,
    offset,
    number,
    instructionsRequired
  ) => {
    setSearchQuery(query);
    setRecipe(undefined);

    API.getRecipe(
      query,
      cuisine,
      diet,
      excludeIngrediuents,
      intolerances,
      apiKey,
      offset,
      number,
      instructionsRequired
    )
      .then(res => {
        // TODO: check if no recipes is found, render modal
        // res.data.results.forEach((recipe: any) => getRecipeById(recipe.id));
        setRecipeIds(res.data.results.map((recipe: any) => recipe.id));
      })
      .catch(err => console.log(err));
  };

  const getRecipeById: getRecipeById = (id, apiKey, includeNutrition): Recipe => {
    API.getRecipeById(id, apiKey, includeNutrition)
      .then(res => {
        // setRecipes([...recipes, res.data]);

        return res.data;
      })
      .catch(err => console.log(err));
  };

  const previousRecipeResults = () => {
    if (endingOffset > 10) {
      setStartingOffset(startingOffset - 10);
      setEndingOffset(endingOffset - 10);
    }
  };

  const nextRecipeResults = () => {
    setStartingOffset(startingOffset + 2);
    setEndingOffset(endingOffset + 2);
  };

  const loadRecipeDetails: LoadRecipeDetails = recipe => {
    setRecipes([]);
    setRecipe(recipe);
  };

  return (
    <Container className='container'>
      <h1>hi</h1>
      <SearchBar getRecipe={getRecipe} />

      {recipe ? (
        <RecipeContainer recipe={recipe} />
      ) : recipes.length ? (
        <RecipeResults
          recipes={recipes}
          loadRecipeDetails={loadRecipeDetails}
          previousRecipeResults={previousRecipeResults}
          nextRecipeResults={nextRecipeResults}
        />
      ) : null}
    </Container>
  );
};

export default App;
