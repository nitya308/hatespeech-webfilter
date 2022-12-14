import { useState } from "react";
import HiddenWords from "./HiddenWords";
import { useDispatch } from "react-redux";
import { addWord } from "../actions/actions";

export default function WordsList() {
  const dispatch = useDispatch();

  const [showingHidden, setShowingHidden] = useState(false);
  const [word, setWord] = useState("");

  return (
    <>
      <h1>Custom Words List</h1>
      <div className="section">
        <input value={word} onChange={(event) => setWord(event.target.value)} className="word-input" type="text" placeholder="Enter a word" />
        <button onClick={() => { dispatch(addWord(word)); }}>
          Add
        </button>
      </div>
      <div className="section">
        <button onClick={() => setShowingHidden(!showingHidden)}>{showingHidden ? "Show hidden words" : "Hide hidden words"}</button>
        {showingHidden && <HiddenWords></HiddenWords>}
      </div>
    </>

  );
}