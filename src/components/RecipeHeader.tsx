import React from 'react';
import { Card, Row, Col, Button, ListGroup } from 'react-bootstrap';
import '../App.css';

interface RecipeHeaderProps {
  recipe?: Recipe;
}

const RecipeHeader: React.FC<RecipeHeaderProps> = ({ recipe }) => {
  console.log('recipe', recipe);

  return (
    <Card className='mt-3 recipe-detailed' bg='dark' text='light'>
      <Card.Header>{recipe?.title}</Card.Header>
      <Row noGutters={true}>
        <Col md={4} className='recipe-image card-bg'>
          <img src={recipe?.image} alt={recipe?.title} />
        </Col>
        <Col md={8} className='card-bg'>
          <Card.Body className='text-dark'>
            <Card.Header>{`Prep. Time: ${recipe?.preparationMinutes} minute(s) ~ Ready In ${recipe?.readyInMinutes}`}</Card.Header>
            <ListGroup variant='flush'>
              <ListGroup.Item>{`Serves: ${recipe?.servings}`}</ListGroup.Item>
              <ListGroup.Item>{`${recipe?.aggregateLikes} Likes`}</ListGroup.Item>
              <ListGroup.Item>{`Weight Watchers Score: ${recipe?.weightWatcherSmartPoints}`}</ListGroup.Item>
            </ListGroup>
            <Button
              variant='dark'
              className='px-2 recipe-preview'
              onClick={() => console.log('button clicked recipe?.sourceUrl')}>
              Source
            </Button>
            <Button
              variant='dark'
              className='px-2 recipe-preview'
              onClick={() => console.log('button clicked')}>
              View Nutrition Facts
            </Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default RecipeHeader;
