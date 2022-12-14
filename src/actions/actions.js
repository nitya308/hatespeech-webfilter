import { LOGIN_USER, ADD_WORD } from "../actionTypes/actionTypes";

const loginUser = (user) => {
  return {
    type: LOGIN_USER,
    payload: {
      userID: user.uid,
      userName: user.displayName,
    },
  };
};

const addWord = (word) => {
  return {
    type: ADD_WORD,
    payload: word,
  };
};

export { loginUser, addWord };