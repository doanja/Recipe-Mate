import React from 'react';
import { Ingredients, Instructions } from './';

interface RecipeContainerProps {
  recipe?: Recipe;
}

const RecipeContainer: React.FC<RecipeContainerProps> = ({ recipe }) => {
  return (
    <div>
      <Ingredients title={recipe?.title} ingredients={recipe?.extendedIngredients} />
      <Instructions title={recipe?.title} instructions={recipe?.instructions} />
    </div>
  );
};

export default RecipeContainer;
