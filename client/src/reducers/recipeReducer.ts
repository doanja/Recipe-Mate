// import { RecipeActionTypes, SET_SEARCHED_RECIPES, RESET_SEARCHED_RECIPES, RecipeState } from '../actions/recipeActionTypes';

// const initialState: RecipeState = {
//   recipes: [],
// };

// const recipeReducer = (state = initialState, action: RecipeActionTypes): RecipeState => {
//   switch (action.type) {
//     case SET_SEARCHED_RECIPES:
//       return { recipes: [...state.recipes, action.payload] };
//     case RESET_SEARCHED_RECIPES:
//       return { recipes: [] };
//     default:
//       return state;
//   }
// };

// export default recipeReducer;

import { RecipeState, RecipeActionTypes, SET_SEARCHED_RECIPES, RESET_SEARCHED_RECIPES } from '../actions/recipeActionTypes';

const initialState: RecipeState = {
  recipes: [],
};

const recipeReducer = (state = initialState, action: RecipeActionTypes): RecipeState => {
  switch (action.type) {
    case SET_SEARCHED_RECIPES:
      return {
        recipes: [...state.recipes, action.payload],
      };
    case RESET_SEARCHED_RECIPES:
      return {
        recipes: [],
      };
    default:
      return state;
  }
};

export default recipeReducer;
