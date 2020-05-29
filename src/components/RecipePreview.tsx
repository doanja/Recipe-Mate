import React, { useState } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import '../App.css';

interface RecipePreview {
  recipe: Recipe;
  loadSingleRecipe: loadSingleRecipe;
}

const RecipePreview: React.FC<RecipePreview> = ({ recipe, loadSingleRecipe }) => {
  return (
    <Card className='mt-3 shadow-sm recipe-details' bg='dark' text='light'>
      <Card.Header>
        {recipe.title} - {`Ready in ${recipe.cookingMinutes} minutes`}
      </Card.Header>
      <Row noGutters={true}>
        <Col md={4} className='recipe-image card-bg'>
          <img src={recipe.image} className='float-left mr-3' />
        </Col>
        <Col md={8} className='card-bg'>
          <Card.Body>
            <Card.Title>
              {`Prep. Time: ${recipe.cookingMinutes}(s) - Serves: ${recipe.servings}`}
            </Card.Title>
            <Card.Text>
              {`Ingredients: marshmallow fluff, nutella, pound cake, unsalted butter`}
            </Card.Text>
            <Button
              variant='light'
              className='px-2 recipe-details'
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
