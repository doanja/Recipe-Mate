import React, { useState } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import { SearchBar } from './components/SearchBar';

import API from './services/recipe';

const App: React.FC = () => {
  const [recipes, setRecipes] = useState('');

  const searchRecipe: SearchRecipe = queryText => {
    API.search(queryText)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };

  return (
    <Container>
      <SearchBar searchRecipe={searchRecipe} />
    </Container>
  );
};

export default App;
