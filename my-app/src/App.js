import React from 'react';
import './App.css';

function Sum(a, b) {
  let result = a + b;
  return result
}

function App() {
  return (
    <h2>{Sum(5, 5)}</h2>
  );
}

export default App