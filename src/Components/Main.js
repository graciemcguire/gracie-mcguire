import React from 'react';
import { Link } from 'react-router-dom'
import contact from '../db.json'
import renderContact from './contactFunc'


function Main (props) {

  return(

    <div>
      { renderContact() }

        <h1>Gracie</h1>
        <h1>McGuire</h1>
        <p>Software Engineer | Designer</p>

        <div className='buttons'>
          <Link to='/about'> About </Link>
          <Link to='/portfolio'> Portfolio </Link>
          <Link to='/contact'> Contact </Link>
        </div>

    </div>
  )
}
export default Main;
