import styled from 'styled-components'

export const IconDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  margin-top: 1.5em;
  height: 4em;
`
export const ContainerDiv = styled.div`
    display: grid;
    grid-template-columns: 30% 70%;
    height: 100vh;
    /* overflow: auto; */

    @media (max-width: 500px) {
        display: flex;
        flex-direction: column;
        margin-top: 0;
        height: auto;
        width: auto;
    }
`

export const MainContentDiv = styled.div`
    text-align: right;
    display: flex;
    flex-flow: column wrap;
    align-content: right;
    justify-content: center;
    margin-top: -2em;
    margin-right: 12em;
        h1 {
            font-size: 5em;
            margin: 0em;
        }

      @media (max-width: 950px) {
        margin-right: 2em;
      }

`


export const ContentDiv = styled.div`
    overflow: auto;

`

export const AboutDiv = styled.div`
    margin-top: 5em;
    display: flex;
    justify-content: space-evenly;
    flex-flow: row wrap;
`

export const BioDiv = styled.div`
    text-align: right;
    font-family: 'Roboto', sans-serif;
    font-size: 1.3em;
    width: 20em;

    @media (max-width: 500px) {
        margin: 0em 1em;
    }
`
