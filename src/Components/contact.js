import React from 'react';
import contact from '../db.json'

const renderContact = () => {
  return contact.map(site => {
    return (
      <a className='icon' href= { site.url } target="_blank" rel="noopener noreferrer">
        <i className={ site.icon }></i>
      </a>
    )
  })
}

export default renderContact;
