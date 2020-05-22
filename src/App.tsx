import React, { useState, useEffect } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import { SearchBar } from './components/SearchBar';

import API from './services/recipe';
import { RecipeResults } from './components/RecipeResults';
import { RecipeContainer } from './components/RecipeContainer';

const App: React.FC = () => {
  const [recipes, setRecipes] = useState([]);
  const [queryText, setQueryText] = useState('');
  const [startingOffset, setStartingOffset] = useState(0);
  const [endingOffset, setEndingOffset] = useState(2);
  const [recipe, setRecipe] = useState<Recipe | undefined>(undefined);

  useEffect(() => {
    searchRecipe('cheese');
  }, []);

  useEffect(() => {
    if (queryText) searchRecipe(queryText, startingOffset, endingOffset);
  }, [startingOffset, endingOffset]);

  const searchRecipe: SearchRecipe = (queryText, from, to) => {
    setQueryText(queryText);
    setRecipe(undefined);

    API.search(queryText, from, to)
      .then(res => {
        let arr = res.data.hits.map((hit: any) => hit.recipe);
        setRecipes(arr);
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
      <SearchBar searchRecipe={searchRecipe} />

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
