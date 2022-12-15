import { LOGIN_USER, ADD_WORD } from "../actionTypes/actionTypes";

const initialState = {
  userID: null,
  userName: null,
  words: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      console.log("updating state");
      return {
        ...state,
        userID: action.payload.userID,
        userName: action.payload.userName,
      };

    case ADD_WORD:
      return {
        ...state,
        words: [...state.words, action.payload],
      };
    default:
      return state;
  }
};