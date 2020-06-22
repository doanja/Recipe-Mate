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
