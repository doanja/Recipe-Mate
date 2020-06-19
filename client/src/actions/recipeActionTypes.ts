export const SET_SEARCHED_RECIPES: string = 'SET_SEARCHED_RECIPES';
export const RESET_SEARCHED_RECIPES: string = 'RESET_SEARCHED_RECIPES';

export interface SetSearchedRecipes {
  type: typeof SET_SEARCHED_RECIPES;
  payload: Recipe[];
}

export interface ResetSearchedRecipes {
  type: typeof RESET_SEARCHED_RECIPES;
}

export type RecipeActionTypes = SetSearchedRecipes | ResetSearchedRecipes;
