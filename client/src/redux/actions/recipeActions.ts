import { RecipeActionTypes, RecipeState, SearchedRecipes } from '../types/recipeTypes';
import { ActionCreator, Action, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RecipeService } from '../../services';
import { AxiosResponse } from 'axios';

const api = new RecipeService('1390eaa38d7b4cc682699d95c9e9d149');

export type AppThunk = ActionCreator<ThunkAction<void, RecipeState, null, Action<string>>>;

export const setSearchedRecipes = (recipes: Recipe[]) => {
  return { type: RecipeActionTypes.SET_SEARCHED_RECIPES, payload: recipes };
};

export const clearSearchcedRecipes = () => {
  return { type: RecipeActionTypes.CLEAR_SEARCHED_RECIPES };
};

export const setRecipeIds = (ids: number[]) => {
  return { type: RecipeActionTypes.SET_RECIPE_IDS, payload: ids };
};

export const clearRecipeIds = () => {
  return { type: RecipeActionTypes.CLEAR_RECIPE_IDS };
};

export const setSearchQuery = (searchQuery: string) => {
  return { type: RecipeActionTypes.SET_SEARCH_QUERY, payload: searchQuery };
};

export const clearSearchQuery = () => {
  return { type: RecipeActionTypes.CLEAR_SEARCH_QUERY };
};

export const incrementSearchOffset = () => {
  return { type: RecipeActionTypes.INCREMENT_SEARCH_OFFSET };
};

export const decrementSearchOffset = () => {
  return { type: RecipeActionTypes.DECREMENT_SEARCH_OFFSET };
};

export const setRecipe = (recipe: Recipe) => {
  return { type: RecipeActionTypes.SET_RECIPE, payload: recipe };
};

export const clearRecipe = () => {
  return { type: RecipeActionTypes.CLEAR_RECIPE };
};
