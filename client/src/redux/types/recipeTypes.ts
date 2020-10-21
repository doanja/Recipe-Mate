export interface RecipeState {
  readonly searchedRecipes: Recipe[]; // array of recipes
  readonly recipeIds: number[]; // array of recipe IDs
  readonly searchQuery: string; // current searched word(s)
  readonly searchOffset: number; // offset to scroll through search results
  readonly recipe: Recipe | null; // used for the single detailed recipe
}

export interface SearchedRecipes {
  searchedRecipes: Recipe[];
}

export enum RecipeActionTypes {
  SET_SEARCHED_RECIPES = 'SET_SEARCHED_RECIPES',
  CLEAR_SEARCHED_RECIPES = 'CLEAR_SEARCHED_RECIPES',
  SET_RECIPE_IDS = 'SET_RECIPE_IDS',
  CLEAR_RECIPE_IDS = 'CLEAR_RECIPE_IDS',
  SET_SEARCH_QUERY = 'SET_SEARCH_QUERY',
  CLEAR_SEARCH_QUERY = 'CLEAR_SEARCH_QUERY',
  INCREMENT_SEARCH_OFFSET = 'INCREMENT_SEARCH_OFFSET',
  DECREMENT_SEARCH_OFFSET = 'DECREMENT_SEARCH_OFFSET',
  SET_RECIPE = 'SET_RECIPE',
  CLEAR_RECIPE = 'CLEAR_RECIPE',
}
