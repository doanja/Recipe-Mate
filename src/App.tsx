import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import { SearchBar } from './components/SearchBar';

const App: React.FC = () => {
  return (
    <Container>
      <SearchBar />
    </Container>
  );
};

export default App;
