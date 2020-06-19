import { RecipeActionTypes, SET_SEARCHED_RECIPES, RESET_SEARCHED_RECIPES } from '../actions/recipeActionTypes';

interface RecipeState {
  recipes: Recipe[];
}

const initialState: RecipeState = {
  recipes: [],
};

const recipeReducer = (state = initialState, action: RecipeActionTypes): RecipeState => {
  switch (action.type) {
    case SET_SEARCHED_RECIPES:
      return { recipes: [...state.recipes] };
    case RESET_SEARCHED_RECIPES:
      return { recipes: [] };
    default:
      return state;
  }
};

export default recipeReducer;
