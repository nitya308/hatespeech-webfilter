import { useState } from "react";
import HiddenWords from "./HiddenWords";
import { useDispatch } from "react-redux";
import { addWord, loginUser } from "../actions/actions";
import { useSelector } from "react-redux";

export default function WordsList() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const [showingHidden, setShowingHidden] = useState(false);
  const [word, setWord] = useState("");

  return (
    <>
      <h1>Custom Words List</h1>
      <h2>{state.userID}</h2>
      <div className="section">
        <input value={word} onChange={(event) => setWord(event.target.value)} className="word-input" type="text" placeholder="Enter a word" />
        <button onClick={() => {
          if (state.userID === null) {
            dispatch(loginUser());
          }
          while (state.userID === null) {
            console.log("waiting for user to sign in");
          }
          dispatch(addWord(state.userID, word));
        }
        }>
          Add Word to List
        </button>
      </div>
      <div className="section">
        <button onClick={() => setShowingHidden(!showingHidden)}>{showingHidden ? "Hide hidden words" : "Show hidden words"}</button>
        {showingHidden && <HiddenWords></HiddenWords>}
      </div>
    </>

  );
}