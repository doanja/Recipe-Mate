export const SET_SEARCHED_RECIPES = 'SET_SEARCHED_RECIPES';
export const CLEAR_SEARCHED_RECIPES = 'RESET_SESARCHED_RECIPES';

export const SET_RECIPE_IDS = 'SET_RECIPE_IDS';
export const CLEAR_RECIPE_IDS = 'CLEAR_RECIPE_IDS';

export interface RecipeState {
  searchedRecipes: Recipe[];
  recipeIds: number[];
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

export type SearchedRecipeActionTypes = SetSearchedRecipes | ClearSearchedRecipes | SetRecipeIds | ClearRecipeIds;
