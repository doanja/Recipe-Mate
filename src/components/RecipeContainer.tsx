import React, { useState, useEffect } from 'react';
import { RecipeHeader, Ingredients, Instructions } from './';

interface RecipeContainerProps {
  recipe?: Recipe;
}

const RecipeContainer: React.FC<RecipeContainerProps> = ({ recipe }) => {
  const [instructions, setInstructions] = useState<Array<string> | undefined>([]);
  useEffect(() => {
    setInstructions(recipe?.analyzedInstructions[0].steps.map(step => step.step));
  }, [recipe]);

  return (
    <div className='mb-3'>
      <RecipeHeader recipe={recipe} />
      <Ingredients ingredients={recipe?.extendedIngredients} />
      <Instructions instructions={instructions} />
    </div>
  );
};

export default RecipeContainer;
