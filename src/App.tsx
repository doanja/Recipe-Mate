import React, { useState } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import { SearchBar } from './components/SearchBar';

import API from './services/recipe';
import { RecipeResults } from './components/RecipeResults';

const App: React.FC = () => {
  const [recipes, setRecipes] = useState([]);
  const [q, setQ] = useState('');
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(10);

  const searchRecipe: SearchRecipe = (queryText, from, to) => {
    setQ(queryText);

    API.search(queryText, from, to)
      .then(res => {
        // console.log('res.data.hits :>> ', res.data.hits);
        setRecipes(res.data.hits);
      })
      .catch(err => console.log(err));
  };

  const previousRecipeResults = () => {
    if (to > 10) {
      setFrom(from - 10);
      setTo(to - 10);
      searchRecipe(q, from, to);
    }
  };

  const nextRecipeResults = () => {
    setFrom(from + 10);
    setTo(to + 10);
    searchRecipe(q, from, to);
  };

  return (
    <Container>
      <SearchBar searchRecipe={searchRecipe} />
      <RecipeResults
        recipes={recipes}
        previousRecipeResults={previousRecipeResults}
        nextRecipeResults={nextRecipeResults}
      />
    </Container>
  );
};

export default App;
