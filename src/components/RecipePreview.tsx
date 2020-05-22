import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

interface RecipePreview {
  recipe: Recipe;
  loadRecipeDetails: LoadRecipeDetails;
}

export const RecipePreview: React.FC<RecipePreview> = ({ recipe, loadRecipeDetails }) => {
  return (
    <Col sm={1} md={6} lg={4}>
      <Card>
        <Card.Img
          variant='top'
          src={recipe.image}
          className='img'
          onClick={() => loadRecipeDetails(recipe)}
        />

        <Card.Body className='text-center'>
          <Card.Title as='h5'> {recipe.label}</Card.Title>
          <Row>
            <Col sm={6}>
              <Card.Subtitle className='mb-2 text-muted'>{recipe.yield} calories</Card.Subtitle>
            </Col>

            <Col sm={6}>
              <Card.Subtitle className='mb-2 text-muted'>
                {recipe.ingredients.length} ingredients
              </Card.Subtitle>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer className='text-center'>
          <Card.Link href={recipe.url}>Source</Card.Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};
