import React from 'react';
import './App.css';
import Main from './Components/Main.js'
import contact from './db.json'

function App() {
  console.log("Made with ❤️ by Gracie McGuire in 2019");
  console.log("github.com/graciemcguire 🏝");

  let renderContact = () => {
    return contact.map(site => {
      return (
        <a class='icon' href= { site.url } target="_blank" rel="noopener noreferrer">
          <i class={ site.icon }></i>
        </a>
      )
    })
  }

  return (
    <div className='app'>
      { renderContact() }
      <Main />
    </div>
  );
}

export default App;
