import React from 'react';
import './App.css';
import Main from './Components/Main.js'
import contact from './db.json'

function App() {
  console.log("Made with ❤️ by Gracie McGuire in 2019");
  console.log("github.com/graciemcguire 🏝");
  return (
    <Main contact={ contact }/>
  );
}

export default App;
