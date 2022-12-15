import React from 'react';
import { useSelector } from 'react-redux';

export default function HiddenWords() {
  const state = useSelector((state) => state);
  return (
    <div className='words-list'>
      {state.words.map((word, idx) => (
        <div className='word' key={idx}>
          {word}
        </div>
      ))}
    </div>
  );
}