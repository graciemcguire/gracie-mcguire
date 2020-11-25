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
                        I am an NYC based software engineer and designer. I first became interested in web development and design as a teenager in Denver, CO, working with and learning from artists and community leaders trying to combine the biggest subcultures of the city, into one creative, diverse, inclusive community.
                        </p>
                        <p>
                        I am hoping to combine my passion for social justice and progressive politics with my skills and experience as a software engineer and designer. I am driven by the prospect of not only diversifying tech, but by using tech for the greater good. 
                        </p>
                        <p>
                        I am always looking for innovative and unique approaches to both technical and design problems, and have experience doing so with  Javascript, React, Redux, Node, Express, PostgreSQL, Ruby, Ruby on Rails, as well as Adobe Creative Suite. 
                       </p> 
                    </BioDiv>
                </AboutDiv>
            </ContentDiv>
        </ContainerDiv>
     );
}
 



export default About;