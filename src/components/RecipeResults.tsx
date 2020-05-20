import React from 'react';
import { Container, Button } from 'react-bootstrap';

interface RecipeResultsProps {
  recipes: Array<Recipe>;
  previousRecipeResults: PreviousRecipeResults;
  nextRecipeResults: NextRecipeResults;
}

export const RecipeResults: React.FC<RecipeResultsProps> = ({}) => {
  return (
    <Container fluid>
      <h1>Search Results</h1>
      <Button variant='primary'>Previous</Button>
      <Button variant='danger'>Next</Button>
    </Container>
  );
};
