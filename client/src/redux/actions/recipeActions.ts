import { RecipeActionTypes, RecipeState, FavoriteRecipes } from '../types/recipeTypes';
import { ActionCreator, Action, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RecipeService } from '../../services';
import { AxiosResponse } from 'axios';

const api = new RecipeService();

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

export const getTodoList: AppThunk = () => {
  return async (dispatch: Dispatch) => {
    try {
      const req: AxiosResponse<any> = await api.getFavoriteRecipes();
      const recipes: string[] = req.data;

      return dispatch({
        type: RecipeActionTypes.GET_FAVORITE_RECIPES,
        payload: recipes,
        token: req.headers.authorization,
      });
    } catch (error) {
      return dispatch({
        type: RecipeActionTypes.REQUEST_FAILED,
        error: error.response.data.name,
      });
    }
  };
};

export const addFavoriteRecipe: ActionCreator<ThunkAction<void, RecipeState, FavoriteRecipes, Action<string>>> = (recipeId: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const req: AxiosResponse<any> = await api.addFavoriteRecipe(recipeId);
      const recipes: string[] = req.data;

      return dispatch({
        type: RecipeActionTypes.ADD_FAVORITE_RECIPE,
        payload: recipes,
        token: req.headers.authorization,
      });
    } catch (error) {
      return dispatch({
        type: RecipeActionTypes.REQUEST_FAILED,
        error: error.response.data.name,
      });
    }
  };
};

export const removeFavoriteRecipe: ActionCreator<ThunkAction<void, RecipeState, FavoriteRecipes, Action<string>>> = (recipeId: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const req: AxiosResponse<any> = await api.removeFavoriteRecipe(recipeId);
      const recipes: string[] = req.data;

      return dispatch({
        type: RecipeActionTypes.REMOVE_FAVORITE_RECIPE,
        payload: recipes,
        token: req.headers.authorization,
      });
    } catch (error) {
      return dispatch({
        type: RecipeActionTypes.REQUEST_FAILED,
        error: error.response.data.name,
      });
    }
  };
};
