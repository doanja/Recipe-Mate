import React from 'react';
import { Ingredient } from './Ingredient';
import { ListGroup } from 'react-bootstrap';
import '../App.css';

interface IngredientsProps {
  recipe?: Recipe;
}

export const Ingredients: React.FC<IngredientsProps> = ({ recipe }) => {
  return (
    <ListGroup className='shadow-sm' id='Ingredients'>
      <ListGroup.Item className='ingredient bg-primary mt-3'>
        <p className='d-inline text-light'>Ingredients for {recipe?.title}</p>
      </ListGroup.Item>
      {/* TODO: call api for ingredients */}
      {/* {recipe?.ingredientLines.map(line => (
        <Ingredient ingredient={line} />
      ))} */}
    </ListGroup>
  );
};
