export const SET_SEARCHED_RECIPES = 'SET_SEARCHED_RECIPES';
export const CLEAR_SEARCHED_RECIPES = 'RESET_SESARCHED_RECIPES';

export const SET_RECIPE_IDS = 'SET_RECIPE_IDS';
export const CLEAR_RECIPE_IDS = 'CLEAR_RECIPE_IDS';

export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';
export const CLEAR_SEARCH_QUERY = 'CLEAR_SEARCH_QUERY';

export const INCREMENT_SEARCH_OFFSET = 'INCREMENT_SEARCH_OFFSET';
export const DECREMENT_SEARCH_OFFSET = 'DECREMENT_SEARCH_OFFSET';

export const SET_RECIPE = 'SET_RECIPE';
export const CLEAR_RECIPE = 'CLEAR_RECIPE';

export const GET_SIMILAR_RECIPES = 'GET_SIMILAR_RECIPES';

export interface RecipeState {
  searchedRecipes: Recipe[]; // array of recipes
  recipeIds: number[]; // array of recipe IDs
  searchQuery: string; // current searched word(s)
  searchOffset: number; // offset to scroll through search results
  recipe: Recipe | null; // used for the single detailed recipe
  // getSimilarRecipes: GetSimilarRecipes
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

interface IncrementSearchOffset {
  type: typeof INCREMENT_SEARCH_OFFSET;
}

interface DecrementSearchOffset {
  type: typeof DECREMENT_SEARCH_OFFSET;
}

interface SetRecipe {
  type: typeof SET_RECIPE;
  payload: Recipe;
}

interface ClearRecipe {
  type: typeof CLEAR_RECIPE;
}

export type RecipeActionTypes =
  | SetSearchedRecipes
  | ClearSearchedRecipes
  | SetRecipeIds
  | ClearRecipeIds
  | SetSearchQuery
  | ClearSearchQuery
  | IncrementSearchOffset
  | DecrementSearchOffset
  | SetRecipe
  | ClearRecipe;
