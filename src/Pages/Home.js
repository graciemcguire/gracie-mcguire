import React from 'react';
import { NavLinks } from '../StyledComponents/NavStyle'
import { ContainerDiv, MainContentDiv } from '../StyledComponents/ContentDivs'
import SidePanel from '../Components/SidePanel'

import renderContact from '../helpers.js/renderContact'


const Home = () => {
    return ( 
        <ContainerDiv>
        <SidePanel name='Hello!'/>
        <MainContentDiv>
            <h1>Gracie</h1>
            <h1>McGuire</h1>
            <div style={{ 'margin': '2em -1.3em .5em 0em'}}>
                <NavLinks to='/about'>  About </NavLinks>|
                <NavLinks to='/portfolio'>  Portfolio </NavLinks>|
                <NavLinks to='/contact'> Contact </NavLinks>
            </div>
            { renderContact() }
        </MainContentDiv>
        </ContainerDiv>
     );
}
 



export default Home;