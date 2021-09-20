import React from 'react';
import styled from 'styled-components';

const SignupContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;

const PopupDiv = styled.div`
  height: 30%;
  width: 30%;
  position: fixed;
  z-index: 1;
  background-color: white;
  box-shadow: 0 0 5px 5px red;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`;

const SignupForm = styled.form`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const FormGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label``;

const Input = styled.input`
  width: 50%;
`;

const Signup = () => (
  <SignupContainer>
    <PopupDiv>
      <SignupForm>
        <FormGroup>
          <Label for="signup_username">Username:</Label>
          <Input type="text" id="signup_username" name="user[username]" />
        </FormGroup>

        <FormGroup>
          <Label for="signup_email">Email:</Label>
          <Input type="text" id="signup_email" name="user[email]" />
        </FormGroup>

        <FormGroup>
          <Label for="signup_password">Password:</Label>
          <Input type="password" id="signup_password" name="user[password]" />
        </FormGroup>

        <FormGroup>
          <Label for="signup_passwordConfirmation">Confirm Password:</Label>
          <Input
            type="password"
            id="signup_passwordConfirmation"
            name="user[passwordConfirmation]"
          />
        </FormGroup>

        <button type="submit">Signup</button>
      </SignupForm>
    </PopupDiv>
  </SignupContainer>
);

export default Signup;
