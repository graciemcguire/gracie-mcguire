import React from 'react';
import Nav from '../Components/Nav.js'
import { ContainerDiv, ContentDiv, AboutDiv, BioDiv } from '../StyledComponents/ContentDivs'
import SidePanel from '../Components/SidePanel'
import pic from '../data/g.jpg'

const About = () => {
    return ( 
        <ContainerDiv>
            <SidePanel name='About Me'/>
            <ContentDiv>
                <Nav/>
                <AboutDiv>
                    <img src={ pic } alt='gracie' style={{'width': '20em', 'align-self': 'center'}}/>
                    <BioDiv>
                        <h1>Hello!</h1>
                        <p>
                        I am an NYC based software engineer and designer hoping to combine my skills and experience with my passion for social justice and progressive politics. I am driven by the prospect of not only diversifying tech, but by using tech for the greater good. 
                        </p>
                        <p>
                        I am always looking for innovative and unique approaches to both technical and design problems, and have experience doing so with  Javascript, React, Redux, Node, Express, PostgreSQL, Ruby, Ruby on Rails, as well as Adobe Creative Suite. 
                       </p> 
                    <p>
                        When not on my computer, I can be found skateboarding, reading, cooking, and missing the times when we could see live music. 
                    </p>
                    </BioDiv>
                </AboutDiv>
            </ContentDiv>
        </ContainerDiv>
     );
}
 



export default About;