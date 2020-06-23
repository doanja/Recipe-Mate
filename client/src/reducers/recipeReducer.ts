import {
  RecipeState,
  RecipeActionTypes,
  SET_SEARCHED_RECIPES,
  CLEAR_SEARCHED_RECIPES,
  SET_RECIPE_IDS,
  CLEAR_RECIPE_IDS,
  SET_SEARCH_QUERY,
  CLEAR_SEARCH_QUERY,
  INCREMENT_SEARCH_OFFSET,
  DECREMENT_SEARCH_OFFSET,
  RESET_SEARCH_OFFSET,
} from '../actions/recipeActionTypes';

const initialState: RecipeState = {
  searchedRecipes: [],
  recipeIds: [],
  searchQuery: '',
  searchOffset: 0,
};

const recipeReducer = (state = initialState, action: RecipeActionTypes): RecipeState => {
  switch (action.type) {
    case SET_SEARCHED_RECIPES:
      return { ...state, searchedRecipes: [...action.payload] };
    case CLEAR_SEARCHED_RECIPES:
      return { ...state, searchedRecipes: [] };
    case SET_RECIPE_IDS:
      return { ...state, recipeIds: [...action.payload] };
    case CLEAR_RECIPE_IDS:
      return { ...state, recipeIds: [] };
    case SET_SEARCH_QUERY:
      return { ...state, searchQuery: action.payload };
    case CLEAR_SEARCH_QUERY:
      return { ...state, searchQuery: '' };
    case INCREMENT_SEARCH_OFFSET:
      return { ...state, searchOffset: state.searchOffset + 2 };
    case DECREMENT_SEARCH_OFFSET:
      return { ...state, searchOffset: state.searchOffset - 2 };
    case RESET_SEARCH_OFFSET:
      return { ...state, searchOffset: 0 };
    default:
      return state;
  }
};

export default recipeReducer;
