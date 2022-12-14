import React from 'react';
import { useSelector } from 'react-redux';

export default function HiddenWords() {
  const state = useSelector((state) => state);
  return (
    state.words.map((word) => (
      <div>
        {word}
      </div>
    ))
  );
}