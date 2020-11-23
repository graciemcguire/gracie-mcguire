import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Portfolio from './Pages/Portfolio'
import Contact from './Pages/Contact'

// const GlobalStyles = createGlobalStyle`
//   @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto&display=swap');

//   /* h1 {
//     font-family: 'Bebas Neue';
//   } */
  
// `

const App = () => {
  console.log("Made with ❤️ by Gracie McGuire in 2020");
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
