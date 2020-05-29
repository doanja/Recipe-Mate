import React from 'react';
import Ingredient from './Ingredient';
import { ListGroup } from 'react-bootstrap';
import '../App.css';

interface IngredientsProps {
  recipe?: Recipe;
}

const Ingredients: React.FC<IngredientsProps> = ({ recipe }) => {
  return (
    <ListGroup className='card-shadow'>
      <ListGroup.Item className='ingredient bg-dark mt-3'>
        <p className='d-inline text-light'>Ingredients for {recipe?.title}</p>
      </ListGroup.Item>

      {recipe?.extendedIngredients.map(ingredient => (
        <Ingredient key={ingredient.id} ingredient={ingredient.originalString} />
      ))}
    </ListGroup>
  );
};

export default Ingredients;
