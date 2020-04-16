import React from 'react';

function Main (props) {

  let renderContact = () => {
    return props.contact.map(site => {
      return (
        <a class='icon' href= { site.url } target="_blank" rel="noopener noreferrer">
          <i class={ site.icon }></i>
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
