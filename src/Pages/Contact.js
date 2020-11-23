import React from 'react';
import Nav from '../Components/Nav.js'
import { ContainerDiv, ContentDiv } from '../StyledComponents/ContentDivs'
import SidePanel from '../Components/SidePanel'

const Contact = () => {
    return ( 
        <ContainerDiv>
            <SidePanel name='say hi!'/>
            <ContentDiv>
                <Nav/>
                <h1>Contact</h1>
            </ContentDiv>
        </ContainerDiv>
     );
}
 



export default Contact;