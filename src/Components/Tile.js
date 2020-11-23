import React from 'react';
import { TileDiv } from '../StyledComponents/TileStyle'
import { Icons } from '../StyledComponents/NavStyle'

const Tile = (props) => {
    console.log(props)
    const { name, image, url, github } = props.item

    const renderGit = () => {
        if (github != undefined){ 
            return (
                 <Icons href= { github } target="_blank" rel="noopener noreferrer">
                    <i alt='github' className="fab fa-github"/>
                </Icons>
            )
        }
    }

    return (
        <TileDiv>
            <img alt={ name } src={ `${ process.env.PUBLIC_URL}${ image }` }/>
            <a href= { url } target="_blank" rel="noreferrer">{ name }</a>
           { renderGit() }
        </TileDiv>
    )
}

export default Tile;