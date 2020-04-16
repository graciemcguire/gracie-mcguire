import React from 'react';
import logo from './logo.svg';
import './App.css';
import github from './github.svg'
import linkedin from './linkedin.png'

function App() {
  console.log("Made with ❤️ by Gracie McGuire in 2019");
  console.log("github.com/graciemcguire 🏝");
  return (
    <div className='main'>
        <h1>Gracie McGuire</h1>
        <p>Software Engineer | Designer</p>

        <div className= 'icon-links'>
        <a href='https://github.com/graciemcguire' target="_blank" rel="noopener noreferrer" >
          <img className='icon' src={ github } alt='github' />
        </a>

        <a href='https://www.linkedin.com/in/gracie-mcguire-43a9b361/' target="_blank" rel="noopener noreferrer" >
          <img className='icon' src={ linkedin } alt='linkedin' />
        </a>
        </div>

      </div>
  );
}

export default App;
