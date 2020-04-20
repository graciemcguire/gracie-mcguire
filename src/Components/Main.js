import React from 'react';
import contact from '../db.json'
import { Link } from 'react-router-dom'

function Main (props) {

  let renderContact = () => {
    return contact.map(site => {
      return (
        <a class='icon' href= { site.url } target="_blank" rel="noopener noreferrer">
          <i class={ site.icon }></i>
        </a>
      )
    })
  }

  return(
    <div>

      <div className='icon-links'>
        { renderContact() }
      </div>

      <div className='main'>
        <h1>Gracie</h1>
        <h1>McGuire</h1>
        <p>Software Engineer | Designer</p>

        <div className='buttons'>
          <Link to='/about'> <button>About</button> </Link>
          <button>Portfolio</button>
        </div>

      </div>
      
    </div>
  )
}
export default Main;
