import React from 'react';
import './App.css';
import Main from './Components/Main.js'
import About from './Components/About'
import Portfolio from './Components/Portfolio'

import { Switch, Route } from 'react-router-dom'

function App() {
  console.log("Made with ❤️ by Gracie McGuire in 2019");
  console.log("github.com/graciemcguire 🏝");

  return (
    <div className='app'>

      <Switch>
        <Route
          path="/about"
          component={ About }
        />
        <Route
          path="/portfolio"
          component={ Portfolio }
        />
        <Route
          path="/"
          component={ Main }
        />
      </Switch>

    </div>
  );
}

export default App;
