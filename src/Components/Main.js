import React from 'react';

function Main (props) {

  let renderContact = () => {
    props.contact.forEach(site => {
      return (
        <a href={ site.url } alt= { site.name } target="_blank" rel="noopener noreferrer">
          <img src={ site.image } />
        </a>
      )
    })
  }

  return(
    <div className='main'>
      <h1>Gracie McGuire</h1>
      <p>Software Engineer | Designer</p>

      <div className= 'icon-links'>
        { renderContact() }
      </div>
    </div>
  )
}
export default Main;
