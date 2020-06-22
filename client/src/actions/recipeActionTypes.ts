export const SET_SEARCHED_RECIPES = 'SET_SEARCHED_RECIPES';
export const RESET_SEARCHED_RECIPES = 'RESET_SESARCHED_RECIPES';

export interface RecipeState {
  recipes: Recipe[];
}

interface SetRecipesAction {
  type: typeof SET_SEARCHED_RECIPES;
  payload: Recipe;
}

interface ResetRecipesAction {
  type: typeof RESET_SEARCHED_RECIPES;
}

export type RecipeActionTypes = SetRecipesAction | ResetRecipesAction;

//

// export interface Message {
//   user: string;
//   message: string;
//   timestamp: number;
// }

// export interface ChatState {
//   messages: Message[];
// }

// export const SEND_MESSAGE = 'SEND_MESSAGE';
// export const DELETE_MESSAGE = 'DELETE_MESSAGE';

// interface SendMessageAction {
//   type: typeof SEND_MESSAGE;
//   payload: Message;
// }

// interface DeleteMessageAction {
//   type: typeof DELETE_MESSAGE;
//   meta: {
//     timestamp: number;
//   };
// }

// export type ChatActionTypes = SendMessageAction | DeleteMessageAction;
