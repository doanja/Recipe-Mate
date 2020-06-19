// import { RESET_SEARCHED_RECIPES, SET_SEARCHED_RECIPES, RecipeActionTypes } from './recipeActionTypes';

// export const setSearchedRecipes = (recipes: Recipe[]): RecipeActionTypes => {
//   return {
//     type: SET_SEARCHED_RECIPES,
//     payload: recipes,
//   };
// };

// export const resetSearchedRecipes = (): RecipeActionTypes => {
//   return {
//     type: RESET_SEARCHED_RECIPES,
//   };
// };

import { SET_SEARCHED_RECIPES, RESET_SEARCHED_RECIPES, RecipeActionTypes } from './recipeActionTypes';

export const setSearchedRecipes = (recipes: Recipe[]): RecipeActionTypes => {
  return {
    type: SET_SEARCHED_RECIPES,
    payload: recipes,
  };
};

export const resetSearchedRecipes = (): RecipeActionTypes => {
  return {
    type: RESET_SEARCHED_RECIPES,
  };
};
