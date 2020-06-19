// export const SET_SEARCHED_RECIPES = 'SET_SEARCHED_RECIPES';
// export const RESET_SEARCHED_RECIPES = 'RESET_SEARCHED_RECIPES';

// export interface RecipeState {
//   recipes: Recipe[];
// }

// export interface SetSearchedRecipes {
//   type: typeof SET_SEARCHED_RECIPES;
//   payload: Recipe[];
// }

// export interface ResetSearchedRecipes {
//   type: typeof RESET_SEARCHED_RECIPES;
// }

// export type RecipeActionTypes = SetSearchedRecipes | ResetSearchedRecipes;

export const SET_SEARCHED_RECIPES = 'SET_SEARCHED_RECIPES';
export const RESET_SEARCHED_RECIPES = 'RESET_SESARCHED_RECIPES';

export interface RecipeState {
  recipes: Recipe[];
}

interface SetRecipesAction {
  type: typeof SET_SEARCHED_RECIPES;
  payload: Recipe[];
}

interface ResetRecipesAction {
  type: typeof RESET_SEARCHED_RECIPES;
}

export type RecipeActionTypes = SetRecipesAction | ResetRecipesAction;
