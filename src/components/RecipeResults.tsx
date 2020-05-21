import React from 'react';
import { Container, Button, CardDeck, Row } from 'react-bootstrap';
import { RecipePreview } from './RecipePreview';

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
    <Container fluid className='my-3'>
      <h3>Search Results</h3>

      <hr />
      <CardDeck>
        <Row>
          {recipes.map((recipe, key) => (
            <RecipePreview key={key} recipe={recipe} />
          ))}
        </Row>
      </CardDeck>

      <hr />

      <div>
        <Button variant='primary' onClick={previousRecipeResults}>
          Previous
        </Button>
        <Button variant='danger' onClick={nextRecipeResults}>
          Next
        </Button>
      </div>
    </Container>
  );
};
