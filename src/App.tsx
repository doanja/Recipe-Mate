import React, { useState, useEffect } from 'react';
import { SearchBar, RecipeResults, RecipeContainer } from './components/index';
import { RecipeService } from './services/RecipeService';
import Container from 'react-bootstrap/Container';
import './App.css';

const App: React.FC = () => {
  const client = new RecipeService('3f52830b3b6d46c98fa94f6e31602a82');

  const [searchedRecipes, setSearchedRecipes] = useState<Recipe[] | any>([]); // array of recipes
  const [recipeIds, setRecipeIds] = useState([]);

  const [searchQuery, setSearchQuery] = useState('');

  const [searchOffset, setSearchOffset] = useState(0);
  const [searchLimit, setSearchLimit] = useState(2);
  const [recipe, setRecipe] = useState<Recipe | any>(''); // used for the single detailed recipe

  // TODO: remove this, used for testing in development only
  useEffect(() => {
    getRecipeId('cake');
  }, []);

  // handles switching offset
  useEffect(() => {
    if (searchQuery) getRecipeId(searchQuery, searchOffset, searchLimit);
  }, [searchOffset, searchLimit, searchQuery]);

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
    setRecipe('');
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

  const previousRecipeResults = () => {
    if (searchLimit > 2) {
      setSearchOffset(searchOffset - 2);
    }
  };

  const nextRecipeResults = () => {
    setSearchOffset(searchOffset + 2);
  };

  const loadSingleRecipe: loadSingleRecipe = recipe => {
    setSearchedRecipes([]);
    setRecipe(recipe);
  };

  return (
    <Container>
      <SearchBar getRecipe={getRecipeId} />

      {recipe ? (
        <RecipeContainer recipe={recipe} />
      ) : searchedRecipes.length ? (
        <RecipeResults
          recipes={searchedRecipes}
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
