import {
  RecipeState,
  SearchedRecipeActionTypes,
  SET_SEARCHED_RECIPES,
  CLEAR_SEARCHED_RECIPES,
  SET_RECIPE_IDS,
  CLEAR_RECIPE_IDS,
} from '../actions/recipeActionTypes';

const initialState: RecipeState = {
  searchedRecipes: [],
  recipeIds: [],
};

const recipeReducer = (state = initialState, action: SearchedRecipeActionTypes): RecipeState => {
  switch (action.type) {
    case SET_SEARCHED_RECIPES:
      return { ...state, searchedRecipes: [...action.payload] };
    case CLEAR_SEARCHED_RECIPES:
      return { ...state, searchedRecipes: [] };
    case SET_RECIPE_IDS:
      return { ...state, recipeIds: [...action.payload] };
    case CLEAR_RECIPE_IDS:
      return { ...state, recipeIds: [] };
    default:
      return state;
  }
};

export default recipeReducer;
