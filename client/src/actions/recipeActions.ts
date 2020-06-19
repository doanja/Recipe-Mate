import { Dispatch } from 'redux';
import { RESET_SEASRCHED_RECIPES, SET_SEARCHED_RECIPES, RecipeDispatchTypes } from './recipeActionTypes';

export const setSearchedRecipes = (recipes: Recipe[]): RecipeDispatchTypes => {
  return {
    type: SET_SEARCHED_RECIPES,
    payload: recipes,
  };
};

export const resetSearchedRecipes = (): RecipeDispatchTypes => {
  return {
    type: RESET_SEASRCHED_RECIPES,
  };
};
