import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';

interface RecipeHeaderPreviewProps {
  recipe: Recipe;
  ingredients: string[];
  loadRecipe: LoadRecipe;
}

const RecipeHeaderPreview: React.FC<RecipeHeaderPreviewProps> = ({ recipe, ingredients, loadRecipe }) => {
  return (
    <Card className='mt-3 recipe-preview' bg='dark' text='light' onClick={() => loadRecipe(recipe)}>
      <Card.Header>{recipe.title}</Card.Header>
      <Row noGutters={true}>
        <Col md={4} className='recipe-image bg-light'>
          <img src={recipe.image} alt={recipe.title} />
        </Col>
        <Col md={8} className='bg-light text-dark'>
          <Card.Body>
            <Card.Title>{`Ready in ${recipe.readyInMinutes} Minutes and Serves ${recipe.servings}`}</Card.Title>

            <Card.Title>
              Ingredients: <em>{`${ingredients.join(', ')}`}</em>
            </Card.Title>
          </Card.Body>
          <Card.Footer className='py-2 mt-5'>
            <Button variant='dark' size='sm' className='px-2 recipe-preview' onClick={() => loadRecipe(recipe)} block>
              View Details
            </Button>
          </Card.Footer>
        </Col>
      </Row>
    </Card>
  );
};

export default RecipeHeaderPreview;
