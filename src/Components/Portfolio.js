import React from 'react'
import renderContact from './contactFunc'
import { Link } from 'react-router-dom'

function Portfolio (props) {
  return(
    <div>

      { renderContact() }

      <div className='main'>

        <h1>Portfolio</h1>
        <div className='render-modal'>
          <div className='portfolio btn'>Web Development</div>
          <div className='portfolio btn'>Design</div>
          <div className='portfolio btn'>Everything</div>
        </div>
        <div className='buttons port'>
          <Link to='/'> <button className='btn'>Home</button> </Link>
          <Link to='/about'> <button className='btn'>About</button> </Link>
        </div>

        </div>

    </div>
  )
}
export default Portfolio
