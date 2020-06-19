export const SET_SEARCHED_RECIPES: string = 'SET_SEARCHED_RECIPES';
export const RESET_SEASRCHED_RECIPES: string = 'RESET_SEARCHED_RECIPES';

export interface SetSearchedRecipes {
  type: typeof SET_SEARCHED_RECIPES;
  payload: Recipe[];
}

export interface ResetSearchedRecipes {
  type: typeof RESET_SEASRCHED_RECIPES;
}

export type RecipeDispatchTypes = SetSearchedRecipes | ResetSearchedRecipes;
