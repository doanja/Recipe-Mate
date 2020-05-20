import React from 'react';

interface RecipeResultProps {
  recipe: Recipe;
}

export const RecipeResult: React.FC<RecipeResultProps> = ({ recipe }) => {
  return <React.Fragment>{recipe.label}</React.Fragment>;
};
