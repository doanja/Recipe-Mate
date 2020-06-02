import React from 'react';
import { Ingredient } from './';
import { ListGroup } from 'react-bootstrap';
import '../App.css';

interface IngredientsProps {
  ingredients?: Array<ExtendedIngredients>;
}

const Ingredients: React.FC<IngredientsProps> = ({ ingredients }) => {
  return (
    <ListGroup className='recipe-detailed'>
      <ListGroup.Item className='mt-3 bg-dark'>
        <p className='d-inline text-light'>Ingredients</p>
      </ListGroup.Item>

      {ingredients?.map((ingredient, index) => (
        <Ingredient key={index} ingredient={ingredient.originalString} />
      ))}
    </ListGroup>
  );
};

export default Ingredients;
