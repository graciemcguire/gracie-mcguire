import React, { useState } from "react";
import axios from "axios";
import { StyledForm, FormDiv } from '../StyledComponents/FormStyle'

function Form() {

  //input state handling

  const [inputs, setInputs] = useState({
    email: "",
    message: ""
  })

  const handleOnChange = event => {
    event.persist();
    setInputs(prev => ({
      ...prev,
      [event.target.id]: event.target.value
    }))
  }


  //server state handling 

  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });

  const handleServerResponse = (ok, msg) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      setInputs({
        email: "",
        message: ""
      });
    }
  };


  const handleOnSubmit = event => {
    event.preventDefault();
    setServerState({ submitting: true });
    axios({
      method: "POST",
      url: "https://formspree.io/f/xjvpevyj",
      data: inputs
    })
      .then(r => {
        handleServerResponse(true, "Thanks!");
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error);
      });
  };


  return (
    <FormDiv>
        <StyledForm
        onSubmit={ handleOnSubmit }>
            <label htmlFor="email"> Email:</label>
            <input
            id="email"
            type="email"
            name="email"
            required
            onChange={ handleOnChange }
            value={ inputs.email }
            />
            <label htmlFor="message">Message:</label>
            <textarea
            id="message"
            name="message"
            onChange={ handleOnChange }
            value={ inputs.message }
            ></textarea>
            <button type="submit" disabled={ serverState.submitting }>
            Submit
            </button>
            { serverState.status && (
            <p className={ !serverState.status.ok ? "errorMsg" : "" }>
                { serverState.status.msg }
            </p>
            ) }
        
        </StyledForm>
    </FormDiv>
  );
};

export default Form;