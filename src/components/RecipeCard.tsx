import React from 'react';
import { RecipeButtonGroup, Tags } from './';
import { Card, Row, Col, Button } from 'react-bootstrap';

interface RecipeCardProps {
  recipe: Recipe;
  ingredients: string[];
  tags: string[];
  LoadRecipe: LoadRecipe;
  preview: boolean;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe,
  ingredients,
  tags,
  LoadRecipe,
  preview,
}) => {
  return preview ? (
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
  ) : (
    <Card className='mt-3 recipe-detailed' bg='dark' text='light'>
      <Card.Header>{recipe?.title}</Card.Header>
      <Row noGutters={true}>
        <Col md={4} className='recipe-image card-bg'>
          <img src={recipe?.image} alt={recipe?.title} />
        </Col>
        <Col md={8} className='card-bg'>
          <Card.Body className='text-dark'>
            <Card.Title>
              {`Ready in ${recipe?.readyInMinutes} minutes and serves ${recipe?.servings}`}
            </Card.Title>

            <RecipeButtonGroup recipe={recipe} />
            <Tags tags={tags} />
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default RecipeCard;
