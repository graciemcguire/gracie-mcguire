import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const NavDiv = styled.div`
    text-align: right;
    display: flex;
    flex-flow: column wrap;
    align-content: right;
    justify-content: center;
    margin-right: 3em;
   
    
    h1 {
        font-size: 2.7em;
        margin-top: -.1em;
        margin-bottom: .2em;
    }

`

export const Icons = styled.a`
    /* width: 2em; */
    margin: .3em;
    color: black;
    font-size: 2em;
    height: 28px;
    transition: 0.4s;

    &:hover {
        font-size: 2.1em;
        opacity: 80%;
    }
`

export const HomeLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:visted {
      text-decoration: none;
      color: black;
  }
`

export const TopNavLink = styled(Link)`
  padding: 1em;
  color: black;
  text-decoration: none;
  align-self: right;
  font-family: 'Bebas Neue';
  font-size: 1.5em;
  transition: .5s;

  &:hover {
    text-decoration: underline;
  }
`

export const NavLinks = styled(Link)`
  padding: 1em;
  color: black;
  text-decoration: none;
  align-self: right;
  font-family: 'Bebas Neue';
  font-size: 1.8em;

  &:hover {
    text-decoration: underline;
    text-underline-position: under;
  }
`;



