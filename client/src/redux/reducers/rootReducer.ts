import { combineReducers } from 'redux';
import recipeReducer from './recipeReducer';
import authReducer from './authReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
  recipe: recipeReducer,
  auth: authReducer,
  modal: modalReducer,
});

export default rootReducer;
