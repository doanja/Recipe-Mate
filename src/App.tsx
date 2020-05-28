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
  const [startingOffset, setStartingOffset] = useState(0);
  const [endingOffset, setEndingOffset] = useState(2);
  const [recipe, setRecipe] = useState<Recipe | any>(''); // used for the single detailed recipe

  // TODO: remove this, used for testing in development only
  useEffect(() => {
    getRecipeId('cake');
  }, []);

  // handles switching offset
  useEffect(() => {
    if (searchQuery) getRecipeId(searchQuery, startingOffset, endingOffset);
  }, [startingOffset, endingOffset]);

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
      <SearchBar getRecipe={getRecipeId} />

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
