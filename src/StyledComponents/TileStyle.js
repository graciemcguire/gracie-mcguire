import styled from "styled-components"

export const TileContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    margin-top:  2em;
    align-items: center;
    justify-content: center;
`


export const TileDiv = styled.div`
    width: 15em;
    
    background-color: black;
    /* color: white; */
    padding: 2em;
    margin: 2em;
    display: flex;
    flex-flow: column wrap;
    align-items: center;

    img {
        width: 15em;
        padding-bottom: 2em;
    }

    a {
        text-decoration: none;
        color: white;
        font-family: 'Roboto', sans-serif;
        &:vistited {
            text-decoration: none;
        }
        &:hover {
            text-decoration: underline;
        }
    }
`
