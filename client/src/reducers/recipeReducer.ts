import { RecipeState, SearchedRecipeActionTypes, SET_SEARCHED_RECIPES, CLEAR_SEARCHED_RECIPES } from '../actions/recipeActionTypes';

const initialState: RecipeState = {
  searchedRecipes: [],
};

const recipeReducer = (state = initialState, action: SearchedRecipeActionTypes): RecipeState => {
  switch (action.type) {
    case SET_SEARCHED_RECIPES:
      return { searchedRecipes: [...action.payload] };
    case CLEAR_SEARCHED_RECIPES:
      return {
        searchedRecipes: [],
      };
    default:
      return state;
  }
};

export default recipeReducer;

//

// import { ChatState, ChatActionTypes, SEND_MESSAGE, DELETE_MESSAGE } from '../actions/recipeActionTypes';

// const initialState2: ChatState = {
//   messages: [],
// };

// export function chatReducer(state = initialState2, action: ChatActionTypes): ChatState {
//   switch (action.type) {
//     case SEND_MESSAGE:
//       return {
//         messages: [...state.messages, action.payload],
//       };
//     case DELETE_MESSAGE:
//       return {
//         messages: state.messages.filter(message => message.timestamp !== action.meta.timestamp),
//       };
//     default:
//       return state;
//   }
// }
