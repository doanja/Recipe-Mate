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
      <Card.Header>{recipe.label}</Card.Header>
      <ListGroup variant='flush'>
        <ListGroup.Item>{recipe.yield} calories</ListGroup.Item>
        <ListGroup.Item>{recipe.ingredients.length} ingredients</ListGroup.Item>
        <ListGroup.Item className='tag' onClick={() => setOpen(!open)}>
          View Recipe Tags
        </ListGroup.Item>

        <Collapse in={open}>
          <ListGroup>
            {recipe.healthLabels.map(label => (
              <ListGroup.Item>- {label.replace(/-/g, ' ')}</ListGroup.Item>
            ))}
          </ListGroup>
        </Collapse>
      </ListGroup>

      <Card.Footer className='text-center'>
        <Card.Link href={recipe.url}>Source</Card.Link>
      </Card.Footer>
    </Card>
  );
};
