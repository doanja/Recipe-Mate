import React, { useState } from 'react';
import Ingredient from './Ingredient';
import { ListGroup } from 'react-bootstrap';
import '../App.css';

interface IngredientsProps {
  recipe?: Recipe;
}

const Ingredients: React.FC<IngredientsProps> = ({ recipe }) => {
  const [ingredients, setIngredients] = useState<Array<ExtendedIngredients> | undefined>([]);

  setIngredients(recipe?.extendedIngredients);

  return (
    <ListGroup className='shadow-sm' id='Ingredients'>
      <ListGroup.Item className='ingredient bg-primary mt-3'>
        <p className='d-inline text-light'>Ingredients for {recipe?.title}</p>
      </ListGroup.Item>
      {/* TODO: call api for ingredients */}
      {ingredients?.map(ingredient => (
        <Ingredient ingredient={ingredient} />
      ))}
    </ListGroup>
  );
};

export default Ingredients;
