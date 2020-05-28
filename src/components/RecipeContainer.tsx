import React from 'react';
import Ingredients from './Ingredients';

interface RecipeContainerProps {
  recipe?: Recipe;
}

const RecipeContainer: React.FC<RecipeContainerProps> = ({ recipe }) => {
  return (
    <div>
      <Ingredients recipe={recipe} />
    </div>
  );
};

export default RecipeContainer;
