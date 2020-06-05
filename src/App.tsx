import React, { useState, useEffect } from 'react';
import { SearchBar, SearchResults, RecipeContainer } from './components/';
import { RecipeService } from './services/RecipeService';
import Container from 'react-bootstrap/Container';
import './App.css';

const App: React.FC = () => {
  const client = new RecipeService('81c2119f628a42bd8d7dc5abbaea9ad2');

  const [searchedRecipes, setSearchedRecipes] = useState<Recipe[] | null>(null); // array of recipes
  const [recipeIds, setRecipeIds] = useState([]);

  const [searchQuery, setSearchQuery] = useState('');

  const [searchOffset, setSearchOffset] = useState(0);

  const [recipe, setRecipe] = useState<Recipe | null>(null); // used for the single detailed recipe

  // TODO: remove this, used for testing in development only
  useEffect(() => {
    getRecipeId('cake');
  }, []);

  // handles loading additional recipes when arrow buttons are clicked
  useEffect(() => {
    if (searchQuery) getRecipeId(searchQuery, searchOffset);
  }, [searchOffset, searchQuery]);

  // calls API and gets the recipe for each ID
  useEffect(() => {
    const loadRecipes = async () => {
      return Promise.all(recipeIds.map(id => client.getRecipeById(id)));
    };

    loadRecipes()
      .then(res => setSearchedRecipes(res.map(newRecipe => newRecipe.data)))
      .catch(err => console.log(err));
  }, [recipeIds]);

  const getRecipeId: getRecipe = (
    query,
    cuisine,
    diet,
    excludeIngrediuents,
    intolerances,
    offset,
    number,
    instructionsRequired
  ) => {
    setSearchQuery(query);
    setRecipe(null);
    setRecipeIds([]);

    client
      .getRecipe(
        query,
        cuisine,
        diet,
        excludeIngrediuents,
        intolerances,
        offset,
        number,
        instructionsRequired
      )
      .then(res => {
        // TODO: check if no recipes is found, render modal
        setRecipeIds(res.data.results.map((recipe: any) => recipe.id));
      })
      .catch(err => console.log(err));
  };

  const loadPrevious = () => {
    if (searchOffset > 2) setSearchOffset(searchOffset - 2);
  };

  const loadNext = () => {
    setSearchOffset(searchOffset + 2);
  };

  const LoadRecipe: LoadRecipe = recipe => {
    setSearchedRecipes([]);
    setRecipe(recipe);
  };

  return (
    <Container>
      <SearchBar getRecipe={getRecipeId} />

      {recipe ? (
        <RecipeContainer recipe={recipe} LoadRecipe={LoadRecipe} preview={false} />
      ) : searchedRecipes ? (
        <SearchResults
          recipes={searchedRecipes}
          LoadRecipe={LoadRecipe}
          searchQuery={searchQuery}
          loadPrevious={loadPrevious}
          loadNext={loadNext}
        />
      ) : null}
    </Container>
  );
};

export default App;
