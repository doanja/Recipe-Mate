import React from 'react';
import { RecipeButtonGroup, Tags } from './';
import { Card, Row, Col } from 'react-bootstrap';

interface RecipeHeaderDetailedProps {
  recipe: Recipe;
  getSimilarRecipes: GetSimilarRecipes;
  tags: string[];
}

const RecipeHeaderDetailed: React.FC<RecipeHeaderDetailedProps> = ({ recipe, getSimilarRecipes, tags }) => {
  return (
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

export default RecipeHeaderDetailed;
