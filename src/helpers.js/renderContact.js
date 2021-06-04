import React from 'react';
import { IconDiv } from '../StyledComponents/ContentDivs'
import { Icons } from '../StyledComponents/NavStyle'
import contact from '../data/contact-db.json'
import resume from '../data/GMcGuire-Resume-2021.pdf'

const mapContact = () => {
  return contact.map(site => {
    return (
      <Icons href= { site.url } target="_blank" rel="noopener noreferrer">
        <i alt={ site.name } className={ site.icon }/>
      </Icons>
    )
  })
}

const renderContact = () => {
  return (
    <IconDiv>
      <Icons href= { resume } target="_blank" rel="noopener noreferrer">
        <i alt='resume' className="fa fa-sticky-note"/>
      </Icons>
       
      { mapContact() }
    </IconDiv>
  )
}
export default renderContact;

