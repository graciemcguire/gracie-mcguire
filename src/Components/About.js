import React from 'react'
import renderContact from './contact'
import { Link } from 'react-router-dom'


function About (props) {



  return(
    <div>

      <div className='icon-links'>
        { renderContact() }
      </div>

      <div className='main'>
        <h1>Hello!</h1>
        <div>
        I am a software engineer and designer born and raised in Denver, but currently residing in Brooklyn.
        </div>


        <div className='buttons'>
          <Link to='/'> <button>Home</button> </Link>
          <Link to='/portfolio'> <button>Portfolio</button> </Link>
        </div>

      </div>


    </div>
  )
}
export default About
