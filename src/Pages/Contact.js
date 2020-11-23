import React from 'react';
import Nav from '../Components/Nav.js'
import Form from '../Components/Form.js'
import { ContainerDiv, ContentDiv } from '../StyledComponents/ContentDivs'
import { FormDiv } from '../StyledComponents/FormStyle'
import SidePanel from '../Components/SidePanel'

const Contact = () => {
    return ( 
        <ContainerDiv>
            <SidePanel name='say hi!'/>
            <ContentDiv>
                <Nav/>
                <FormDiv>
                    <Form />
                </FormDiv>
            </ContentDiv>
        </ContainerDiv>
     );
}
 



export default Contact;