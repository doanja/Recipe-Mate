import React, { useState, useEffect } from 'react';
import { SearchBar, RecipeResults, RecipeContainer } from './components/index';
import { RecipeService } from './services/RecipeService';
import Container from 'react-bootstrap/Container';
import './App.css';

const App: React.FC = () => {
  const client = new RecipeService('355b1f4de8e34560a7a8ac33df39c3c2');

  const [recipes, setRecipes] = useState<Recipe[] | any>([]); // array of recipes
  const [recipeIds, setRecipeIds] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [startingResults, setStartingResults] = useState(0);
  const [endingResults, setEndingResults] = useState(2);
  const [recipe, setRecipe] = useState<Recipe | any>(''); // used for the single detailed recipe

  // TODO: remove this, used for testing in development only
  useEffect(() => {
    getRecipeId('cake');
  }, []);

  // handles switching offset
  useEffect(() => {
    if (searchQuery) getRecipeId(searchQuery, startingResults, endingResults);
  }, [startingResults, endingResults]);

  // calls API and gets the recipe for each ID
  useEffect(() => {
    const loadRecipes = async () => {
      return Promise.all(recipeIds.map(id => client.getRecipeById(id)));
    };

    loadRecipes()
      .then(res => setRecipes(res.map(newRecipe => newRecipe.data)))
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
    setRecipe('');

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

  const previousRecipeResults = () => {
    if (endingResults > 10) {
      setStartingResults(startingResults - 10);
      setEndingResults(endingResults - 10);
    }
  };

  const nextRecipeResults = () => {
    setStartingResults(startingResults + 2);
    setEndingResults(endingResults + 2);
  };

  const loadSingleRecipe: loadSingleRecipe = recipe => {
    setRecipes([]);
    setRecipe(recipe);
  };

  return (
    <Container className='container'>
      <SearchBar getRecipe={getRecipeId} />

      {recipe ? (
        <RecipeContainer recipe={recipe} />
      ) : recipes.length ? (
        <RecipeResults
          recipes={recipes}
          loadSingleRecipe={loadSingleRecipe}
          searchQuery={searchQuery}
          previousRecipeResults={previousRecipeResults}
          nextRecipeResults={nextRecipeResults}
        />
      ) : null}
    </Container>
  );
};

export default App;
