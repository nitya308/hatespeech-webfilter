import { LOGIN_USER, ADD_WORD } from "../actionTypes/actionTypes";
import { signInUser, addWordToUser } from "../firebase";

export function loginUser(user) {
  return (dispatch) => {
    signInUser().then((user) => {
      dispatch({
        type: LOGIN_USER,
        payload: {
          userID: user.uid,
          userName: user.displayName,
        },
      });
    });
  };
};


export function addWord(word) {
  return (dispatch) => {
    addWordToUser(word).then(() => {
      dispatch({
        type: ADD_WORD,
        payload: word,
      });
    });
  };
};

