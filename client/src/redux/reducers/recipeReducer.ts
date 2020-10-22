import { RecipeState, RecipeActionTypes } from '../types/recipeTypes';
import { Reducer } from 'redux';

const initialState: RecipeState = {
  searchedRecipes: [],
  recipeIds: [],
  searchQuery: '',
  searchOffset: 0,
  recipe: null,
  favoriteRecipes: [],
  error: undefined,
  token: '',
};

const recipeReducer: Reducer<RecipeState> = (state = initialState, action) => {
  switch (action.type) {
    case RecipeActionTypes.SET_SEARCHED_RECIPES:
      return { ...state, searchedRecipes: [...action.payload] };
    case RecipeActionTypes.CLEAR_SEARCHED_RECIPES:
      return { ...state, searchedRecipes: [] };
    case RecipeActionTypes.SET_RECIPE_IDS:
      return { ...state, recipeIds: [...action.payload] };
    case RecipeActionTypes.CLEAR_RECIPE_IDS:
      return { ...state, recipeIds: [] };
    case RecipeActionTypes.SET_SEARCH_QUERY:
      return { ...state, searchQuery: action.payload };
    case RecipeActionTypes.CLEAR_SEARCH_QUERY:
      return { ...state, searchQuery: '' };
    case RecipeActionTypes.INCREMENT_SEARCH_OFFSET:
      return { ...state, searchOffset: state.searchOffset + 2 };
    case RecipeActionTypes.DECREMENT_SEARCH_OFFSET:
      return { ...state, searchOffset: state.searchOffset - 2 };
    case RecipeActionTypes.SET_RECIPE:
      return { ...state, recipe: action.payload };
    case RecipeActionTypes.CLEAR_RECIPE:
      return { ...state, recipe: null };
    case RecipeActionTypes.GET_FAVORITE_RECIPES:
      return { ...state, error: state.error, favoriteRecipes: action.payload, token: action.token };
    case RecipeActionTypes.ADD_FAVORITE_RECIPE:
      return { ...state, error: state.error, favoriteRecipes: action.payload, token: action.token };
    case RecipeActionTypes.REMOVE_FAVORITE_RECIPE:
      return { ...state, error: state.error, favoriteRecipes: action.payload, token: action.token };
    case RecipeActionTypes.REQUEST_FAILED:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default recipeReducer;
