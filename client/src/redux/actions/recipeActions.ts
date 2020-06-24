import {
  SET_SEARCHED_RECIPES,
  CLEAR_SEARCHED_RECIPES,
  SET_RECIPE_IDS,
  CLEAR_RECIPE_IDS,
  SET_SEARCH_QUERY,
  CLEAR_SEARCH_QUERY,
  RecipeActionTypes,
  INCREMENT_SEARCH_OFFSET,
  DECREMENT_SEARCH_OFFSET,
  SET_RECIPE,
  CLEAR_RECIPE,
} from '../types/recipeTypes';

export const setSearchedRecipes = (recipes: Recipe[]): RecipeActionTypes => {
  return { type: SET_SEARCHED_RECIPES, payload: recipes };
};

export const clearSearchcedRecipes = (): RecipeActionTypes => {
  return { type: CLEAR_SEARCHED_RECIPES };
};

export const setRecipeIds = (ids: number[]): RecipeActionTypes => {
  return { type: SET_RECIPE_IDS, payload: ids };
};

export const clearRecipeIds = (): RecipeActionTypes => {
  return { type: CLEAR_RECIPE_IDS };
};

export const setSearchQuery = (searchQuery: string): RecipeActionTypes => {
  return { type: SET_SEARCH_QUERY, payload: searchQuery };
};

export const clearSearchQuery = (): RecipeActionTypes => {
  return { type: CLEAR_SEARCH_QUERY };
};

export const incrementSearchOffset = (): RecipeActionTypes => {
  return { type: INCREMENT_SEARCH_OFFSET };
};

export const decrementSearchOffset = (): RecipeActionTypes => {
  return { type: DECREMENT_SEARCH_OFFSET };
};

export const setRecipe = (recipe: Recipe): RecipeActionTypes => {
  return { type: SET_RECIPE, payload: recipe };
};

export const clearRecipe = (): RecipeActionTypes => {
  return { type: CLEAR_RECIPE };
};
