import React from 'react';
import { useSelector } from 'react-redux';

export default function HiddenWords() {
  const state = useSelector((state) => state);
  return (
    <div className='words-list'>
      {state.words.map((word) => (
        <div className='word'>
          {word}
        </div>
      ))}
    </div>
  );
}