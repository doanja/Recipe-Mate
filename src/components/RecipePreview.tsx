import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import '../App.css';

interface RecipePreview {
  recipe: Recipe;
  loadSingleRecipe: loadSingleRecipe;
}

const RecipePreview: React.FC<RecipePreview> = ({ recipe, loadSingleRecipe }) => {
  const [ingredients, setIngredients] = useState<Array<string>>([]);

  useEffect(() => {
    setIngredients(recipe.extendedIngredients.map(ingredient => ingredient.name));
  }, [recipe]);

  return (
    <Card
      className='mt-3 recipe-preview recipe-preview'
      bg='dark'
      text='light'
      onClick={() => loadSingleRecipe(recipe)}>
      <Card.Header>
        {recipe.title} - {`Ready in ${recipe.cookingMinutes} minutes`}
      </Card.Header>
      <Row noGutters={true}>
        <Col md={4} className='recipe-image card-bg'>
          <img src={recipe.image} alt={recipe.title} />
        </Col>
        <Col md={8} className='card-bg'>
          <Card.Body className='text-dark'>
            <Card.Title>
              {`Prep. Time: ${recipe.cookingMinutes} minute(s) - Serves: ${recipe.servings}`}
            </Card.Title>
            <Card.Text>Ingredients:</Card.Text>
            <Card.Text>{`${ingredients.join(', ')}`}</Card.Text>
            <Button
              variant='dark'
              className='px-2 recipe-preview'
              onClick={() => loadSingleRecipe(recipe)}>
              View Recipe Details
            </Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default RecipePreview;
