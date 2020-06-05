import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';

interface RecipePreview {
  recipe: Recipe;
  LoadRecipe: LoadRecipe;
}

const RecipePreview: React.FC<RecipePreview> = ({ recipe, LoadRecipe }) => {
  const [ingredients, setIngredients] = useState<string[]>([]);

  useEffect(() => {
    setIngredients(recipe.extendedIngredients.map(ingredient => ingredient.name));
  }, [recipe]);

  return (
    <Card className='mt-3 recipe-preview' bg='dark' text='light' onClick={() => LoadRecipe(recipe)}>
      <Card.Header>{recipe.title}</Card.Header>
      <Row noGutters={true}>
        <Col md={4} className='recipe-image card-bg'>
          <img src={recipe.image} alt={recipe.title} />
        </Col>
        <Col md={8} className='card-bg'>
          <Card.Body className='text-dark'>
            <Card.Title>
              {`Ready in ${recipe.readyInMinutes} minutes and serves ${recipe.servings}`}
            </Card.Title>
            <Card.Text>Ingredients:</Card.Text>
            <Card.Text>{`${ingredients.join(', ')}`}</Card.Text>
            <Button
              variant='dark'
              className='px-2 recipe-preview'
              onClick={() => LoadRecipe(recipe)}
              block>
              View Details
            </Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default RecipePreview;
