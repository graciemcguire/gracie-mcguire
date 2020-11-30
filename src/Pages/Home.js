import React from 'react';
import { NavLinks } from '../StyledComponents/NavStyle'
import { ContainerDiv, MainContentDiv } from '../StyledComponents/ContentDivs'
import { HomeNavDiv } from '../StyledComponents/NavStyle.js'
import SidePanel from '../Components/SidePanel'

import renderContact from '../helpers.js/renderContact'


const Home = () => {
    return ( 
        <ContainerDiv>
        <SidePanel name='Hello!'/>
        <MainContentDiv>
            <h1>Gracie</h1>
            <h1>McGuire</h1>
            <HomeNavDiv>
                <NavLinks to='/about'>  About </NavLinks>|
                <NavLinks to='/portfolio'>  Portfolio </NavLinks>|
                <NavLinks to='/contact'> Contact </NavLinks>
            </HomeNavDiv>
            { renderContact() }
        </MainContentDiv>
        </ContainerDiv>
     );
}
 



export default Home;