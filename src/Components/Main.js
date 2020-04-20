import React from 'react';
import { Link } from 'react-router-dom'
import contact from '../db.json'
import renderContact from './contact'


function Main (props) {

  return(

    <div>
      { renderContact() }
      <div className='main'>
        <h1>Gracie</h1>
        <h1>McGuire</h1>
        <p>Software Engineer | Designer</p>

        <div className='buttons'>
          <Link to='/about'> <button>About</button> </Link>
          <Link to='/portfolio'> <button>Portfolio</button> </Link>
        </div>

      </div>

    </div>
  )
}
export default Main;
