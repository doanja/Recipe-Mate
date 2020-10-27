import React from 'react';
import { RecipeHeaderDetailed, RecipeHeaderPreview } from './';

interface RecipeHeaderWrapperProps {
  recipe: Recipe;
  ingredients: string[];
  tags: string[];
  loadRecipe: LoadRecipe;
  getSimilarRecipes: GetSimilarRecipes;
  preview: boolean;
}

// TODO: add icon to favorite recipe

const RecipeHeaderWrapper: React.FC<RecipeHeaderWrapperProps> = ({ recipe, ingredients, tags, loadRecipe, preview, getSimilarRecipes }) => {
  return preview ? (
    <RecipeHeaderPreview recipe={recipe} ingredients={ingredients} loadRecipe={loadRecipe} />
  ) : (
    <RecipeHeaderDetailed recipe={recipe} getSimilarRecipes={getSimilarRecipes} tags={tags} />
  );
};

export default RecipeHeaderWrapper;
