import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Portfolio from './Pages/Portfolio'
import Contact from './Pages/Contact'

const App = () => {
  console.log("Made with ❤️ by Gracie McGuire");
  console.log("github.com/graciemcguire 🏝");
 return (
      <Switch>
        <Route 
          path='/about'
          component={ About }
        />
        <Route 
          path='/portfolio'
          component={ Portfolio }
        />
        <Route 
          path='/contact'
          component={ Contact }
        />
        <Route 
          path='/*'
          component={ Home }
        />
      </Switch>
  )
}

export default App;
