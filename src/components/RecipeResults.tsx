import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { RecipeResult } from './RecipeResult';

interface RecipeResultsProps {
  recipes: Array<Recipe>;
  previousRecipeResults: PreviousRecipeResults;
  nextRecipeResults: NextRecipeResults;
}

export const RecipeResults: React.FC<RecipeResultsProps> = ({
  recipes,
  previousRecipeResults,
  nextRecipeResults,
}) => {
  return (
    <Container fluid>
      <h1>Search Results</h1>
      {recipes.map((recipe, key) => (
        <RecipeResult key={key} recipe={recipe} />
      ))}
      <Button variant='primary' onClick={previousRecipeResults}>
        Previous
      </Button>
      <Button variant='danger' onClick={nextRecipeResults}>
        Next
      </Button>
    </Container>
  );
};
