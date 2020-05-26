import React from 'react';
import { Ingredients } from './Ingredients';

interface RecipeContainerProps {
  recipe?: Recipe;
}

export const RecipeContainer: React.FC<RecipeContainerProps> = ({ recipe }) => {
  console.log('recipe :>> ', recipe);
  return (
    <div>
      <Ingredients recipe={recipe} />
    </div>
  );
};
