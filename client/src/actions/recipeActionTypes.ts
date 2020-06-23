export const SET_SEARCHED_RECIPES = 'SET_SEARCHED_RECIPES';
export const CLEAR_SEARCHED_RECIPES = 'RESET_SESARCHED_RECIPES';

export const SET_RECIPE_IDS = 'SET_RECIPE_IDS';
export const CLEAR_RECIPE_IDS = 'CLEAR_RECIPE_IDS';

export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';
export const CLEAR_SEARCH_QUERY = 'CLEAR_SEARCH_QUERY';

export interface RecipeState {
  searchedRecipes: Recipe[];
  recipeIds: number[];
  searchQuery: string;
}

interface SetSearchedRecipes {
  type: typeof SET_SEARCHED_RECIPES;
  payload: Recipe[];
}

interface ClearSearchedRecipes {
  type: typeof CLEAR_SEARCHED_RECIPES;
}

interface SetRecipeIds {
  type: typeof SET_RECIPE_IDS;
  payload: number[];
}

interface ClearRecipeIds {
  type: typeof CLEAR_RECIPE_IDS;
}

interface SetSearchQuery {
  type: typeof SET_SEARCH_QUERY;
  payload: string;
}

interface ClearSearchQuery {
  type: typeof CLEAR_SEARCH_QUERY;
}

export type RecipeActionTypes = SetSearchedRecipes | ClearSearchedRecipes | SetRecipeIds | ClearRecipeIds | SetSearchQuery | ClearSearchQuery;
