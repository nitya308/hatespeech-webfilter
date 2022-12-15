import { LOGIN_USER, ADD_WORD } from "../actionTypes/actionTypes";
import { signInUser, addWordToUser } from "../firebase";

export function loginUser() {
  return (dispatch) => {
    signInUser().then((user) => {
      dispatch({
        type: LOGIN_USER,
        payload: {
          userID: user.email,
          userName: user.displayName,
        },
      });
    });
  };
};


export function addWord(userID, word) {
  return (dispatch) => {
    addWordToUser(userID, word).then(() => {
      dispatch({
        type: ADD_WORD,
        payload: word,
      });
    });
  };
};

