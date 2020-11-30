import styled from "styled-components"

export const SideTitle = styled.h1`
    color: #fff;
    font-size: 10em;
    transform: rotate(-90deg);
    white-space: nowrap;

     @media (max-width: 500px) {
        transform: none;
        font-size: 80px;
        margin: auto;
        white-space: nowrap;
      }
`;
 
export const SideDiv = styled.div`
    flex-grow: 1;
    background-color: #000;
    height: 101vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media (max-width: 500px) {
        flex-grow: none;
        background-color: black;
        margin: 25px 50px 75px 100px;
        width: 60vw;
        margin-top: 5em;
        padding: 1em;
        height: auto;
    }
    
    @media (max-width: 400px) {
        flex-grow: none;
        background-color: black;
        margin-left: 75px;
        width: 60vw;
        margin-top: 5em;
        padding: 1em;
    }
`;