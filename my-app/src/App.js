import React from 'react';
import './App.css';

function Greeting(name) {
  return <h1>Hello, {name}!</h1>;
}
function App() {
  return (
    <div>{Greeting("Anastasia")}</div>
  );
}

export default App