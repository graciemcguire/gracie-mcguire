import styled from 'styled-components'

export const FormDiv = styled.div`
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 1.3em;
    margin-top: 3em;
    overflow: auto;
    /* width: 20em; */

    @media (max-width: 500px) {
        margin-top: 1em;
    }
`
export const StyledForm = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    input {
        margin: 1em 2em;
        width: 30vw;
        height: 3vh;
        padding: 1em;
        font-family: 'Roboto', sans-serif;
        font-size: 1em;
    }
    textarea {
        padding: 1em 1em 4em;
        margin: 1em 2em;
        width: 30vw;
        height: 3vh;
        font-family: 'Roboto', sans-serif;
        font-size: .8em;
    }
    label {
        font-family: 'Bebas Neue';
    }
    button {
        background-color: black;
        color: white; 
        font-family: 'Bebas Neue';
        font-size: 1em;
        width: 15vw;
        height: 2em;
        margin-bottom: 3em;
    }



    @media (max-width: 500px) {
        margin-top: 1em;

        input {
            width: auto;
            height: 1em;
        }

        textarea {
            width: auto;
            height: auto;
        }

        button {
            width: auto;
        }
    }
`
