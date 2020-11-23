import React from 'react';
import { NavDiv, TopNavLink, HomeLink } from '../StyledComponents/NavStyle'
import renderContact from '../helpers.js/renderContact'

const Nav = () => {
    return (
    <NavDiv>
        { renderContact() }
        <HomeLink to='/'><h1>Gracie McGuire</h1></HomeLink>
        <div style={{'margin-right': '-1.1em'}}>
            <TopNavLink to='/about'>  About </TopNavLink>|
            <TopNavLink to='/portfolio'>  Portfolio </TopNavLink>|
            <TopNavLink to='/contact'> Contact </TopNavLink>
        </div>
        
    </NavDiv>
    )}

export default Nav;