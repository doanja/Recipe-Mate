import React, { useState } from 'react';
import { Card, ListGroup, Collapse } from 'react-bootstrap';
import '../App.css';

interface RecipePreview {
  recipe: Recipe;
  loadRecipeDetails: LoadRecipeDetails;
}

export const RecipePreview: React.FC<RecipePreview> = ({ recipe, loadRecipeDetails }) => {
  const [open, setOpen] = useState(false);

  return (
    <Card>
      <Card.Img
        variant='top'
        src={recipe.image}
        className='img'
        onClick={() => loadRecipeDetails(recipe)}
      />
      <Card.Header className='text-center'>{recipe.title}</Card.Header>
      <ListGroup variant='flush'>
        <ListGroup.Item>Serves {recipe.servings}</ListGroup.Item>
        <ListGroup.Item>Ready in {recipe.readyInMinutes} minutes</ListGroup.Item>
        <ListGroup.Item className='tag' onClick={() => setOpen(!open)}>
          View Recipe Tags
        </ListGroup.Item>

        <Collapse in={open}>
          <ListGroup>
            {/* {recipe.healthLabels.map(label => (
              <ListGroup.Item>- {label.replace(/-/g, ' ')}</ListGroup.Item>
            ))} */}
            hello
          </ListGroup>
        </Collapse>
      </ListGroup>

      <Card.Footer className='text-center'>
        <Card.Link href={recipe.sourceUrl}>Source</Card.Link>
      </Card.Footer>
    </Card>
  );
};
