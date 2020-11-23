import React from 'react';
import { TileDiv } from '../StyledComponents/TileStyle'

const Tile = (props) => {
    console.log(props)
    const { name, image, url} = props.item

    return (
        <TileDiv>
            <img alt={ name } src={ `${ process.env.PUBLIC_URL}${ image }` }/>
            <a href= { url } target="_blank" rel="noreferrer">{ name }</a>
        </TileDiv>
    )
}

export default Tile;