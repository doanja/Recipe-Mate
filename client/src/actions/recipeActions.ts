import { SET_SEARCHED_RECIPES, CLEAR_SEARCHED_RECIPES, SET_RECIPE_IDS, CLEAR_RECIPE_IDS, SearchedRecipeActionTypes } from './recipeActionTypes';

export const setSearchedRecipes = (recipes: Recipe[]): SearchedRecipeActionTypes => {
  return {
    type: SET_SEARCHED_RECIPES,
    payload: recipes,
  };
};

export const clearSearchcedRecipes = (): SearchedRecipeActionTypes => {
  return {
    type: CLEAR_SEARCHED_RECIPES,
  };
};

export const setRecipeIds = (ids: number[]): SearchedRecipeActionTypes => {
  return {
    type: SET_RECIPE_IDS,
    payload: ids,
  };
};

export const clearRecipeIds = (): SearchedRecipeActionTypes => {
  return {
    type: CLEAR_RECIPE_IDS,
  };
};
