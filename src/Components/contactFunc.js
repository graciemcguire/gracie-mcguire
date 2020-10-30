import React from 'react';
import contact from '../db.json'
import resume from '../GMcGuire-Resume.pdf'

const mapContact = () => {
  return contact.map(site => {
    return (
      <a className='icon' href= { site.url } target="_blank" rel="noopener noreferrer">
        <i alt={ site.name } className={ site.icon }></i>
      </a>
    )
  })
}

const renderContact = () => {
  return (
    <div className='icon-links'>
      <a className='icon' href= { resume } target="_blank" rel="noopener noreferrer">
        <i alt='resume' className="fa fa-sticky-note"></i>
      </a>
       
      { mapContact() }
    </div>
  )
}
export default renderContact;
