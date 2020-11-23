import React from 'react';
import Nav from '../Components/Nav.js'
import { ContainerDiv, ContentDiv } from '../StyledComponents/ContentDivs'
import { TileContainer } from '../StyledComponents/TileStyle'
import SidePanel from '../Components/SidePanel'
import Tile from '../Components/Tile'
import portfolio from '../data/portfolio-db.json'

const mapTiles = () => {
    return portfolio.map(item => ( 
        <Tile item={ item } key={ item.name }/>
    ))
    
}

const Portfolio = () => {
    return ( 
        <ContainerDiv>
            <SidePanel name={'Portfolio'}/>
            <ContentDiv>
                <Nav/>
                <TileContainer>
                    { mapTiles() }
                </TileContainer>
            </ContentDiv>
        </ContainerDiv>
     );
}
 



export default Portfolio;