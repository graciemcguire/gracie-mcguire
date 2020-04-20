import React from 'react'
import renderContact from './contact'
import { Link } from 'react-router-dom'


function About (props) {

  return(
    <div>

        { renderContact() }

      <div className='main'>
        <h1>Hello!</h1>
        <div className='bio'>
          I am a full stack software engineer and designer born and raised in Denver, but currently residing in Brooklyn. I have a passion for social justice and progessive politics, and want to use my skills and my voice to help make the world a better and more inclusive place. I love finding creative solutions to problems, and am always striving to learn more.
        </div>


        <div className='buttons'>
          <Link to='/'> <button className='btn'>Home</button> </Link>
          <Link to='/portfolio'> <button className='btn'>Portfolio</button> </Link>
        </div>

      </div>


    </div>
  )
}
export default About;
