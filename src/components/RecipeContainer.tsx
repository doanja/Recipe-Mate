import React from 'react';

interface RecipeContainerProps {
  recipe?: Recipe;
}

export const RecipeContainer: React.FC<RecipeContainerProps> = ({ recipe }) => {
  console.log('recipe :>> ', recipe);
  return (
    <div>
      <h1>recipe container</h1>
    </div>
  );
};
