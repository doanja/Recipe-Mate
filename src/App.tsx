import React, { useState, useEffect } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import { SearchBar } from './components/SearchBar';

import API from './services/recipe';
import { RecipeResults } from './components/RecipeResults';

const App: React.FC = () => {
  const [recipes, setRecipes] = useState([]);
  const [q, setQ] = useState('');
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(2);

  const searchRecipe: SearchRecipe = (queryText, from, to) => {
    setQ(queryText);

    API.search(queryText, from, to)
      .then(res => {
        let arr = res.data.hits.map((hit: any) => hit.recipe);

        setRecipes(arr);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    console.log('recipes :>> ', recipes);
  }, [recipes]);

  const previousRecipeResults = () => {
    if (to > 10) {
      setFrom(from - 10);
      setTo(to - 10);
      searchRecipe(q, from, to);
    }
  };

  const nextRecipeResults = () => {
    setFrom(from + 2);
    console.log('from :>> ', from);
    setTo(to + 2);
    console.log('to :>> ', to);
    searchRecipe(q, from, to);
  };

  return (
    <Container className='container'>
      <SearchBar searchRecipe={searchRecipe} />
      {recipes.length ? (
        <RecipeResults
          recipes={recipes}
          previousRecipeResults={previousRecipeResults}
          nextRecipeResults={nextRecipeResults}
        />
      ) : null}
    </Container>
  );
};

export default App;
