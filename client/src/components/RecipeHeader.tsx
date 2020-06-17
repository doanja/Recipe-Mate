import React from 'react';
import { RecipeButtonGroup, Tags } from '.';
import { Card, Row, Col, Button } from 'react-bootstrap';

interface RecipeHeaderProps {
  recipe: Recipe;
  ingredients: string[];
  tags: string[];
  loadRecipe: LoadRecipe;
  preview: boolean;
  getSimilarRecipes: GetSimilarRecipes;
}

const RecipeHeader: React.FC<RecipeHeaderProps> = ({
  recipe,
  ingredients,
  tags,
  loadRecipe,
  preview,
  getSimilarRecipes,
}) => {
  return preview ? (
    <Card className='mt-3 recipe-preview' bg='dark' text='light' onClick={() => loadRecipe(recipe)}>
      <Card.Header>{recipe.title}</Card.Header>
      <Row noGutters={true}>
        <Col md={4} className='recipe-image bg-light'>
          <img src={recipe.image} alt={recipe.title} />
        </Col>
        <Col md={8} className='bg-light text-dark'>
          <Card.Body>
            <Card.Title>
              {`Ready in ${recipe.readyInMinutes} Minutes and Serves ${recipe.servings}`}
            </Card.Title>

            <Card.Text className='font-weight-bold '>
              Ingredients: <em className='font-weight-normal'>{`${ingredients.join(', ')}`}</em>
            </Card.Text>
          </Card.Body>
          <Card.Footer className='py-2 mt-5'>
            <Button
              variant='dark'
              size='sm'
              className='px-2 recipe-preview'
              onClick={() => loadRecipe(recipe)}
              block>
              View Details
            </Button>
          </Card.Footer>
        </Col>
      </Row>
    </Card>
  ) : (
    <Card className='mt-3 recipe-detailed' bg='dark' text='light'>
      <Card.Header>{recipe.title}</Card.Header>
      <Row noGutters={true}>
        <Col md={4} className='recipe-image bg-light'>
          <img src={recipe.image} alt={recipe.title} />
        </Col>
        <Col md={8} className='bg-light text-dark'>
          <Card.Body>
            <RecipeButtonGroup recipe={recipe} getSimilarRecipes={getSimilarRecipes} />
          </Card.Body>
          <Card.Footer className='py-2 mt-5'>
            <Tags tags={tags} />
          </Card.Footer>
        </Col>
      </Row>
    </Card>
  );
};

export default RecipeHeader;
