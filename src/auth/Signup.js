import React from 'react';
import styled from 'styled-components';

const SignupContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;

const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FormGroup = styled.div`
  display: flex;
`;

const Label = styled.label``;

const Signup = () => (
  <SignupContainer>
    <SignupForm>
      <FormGroup>
        <Label for="signup_name">Name: </Label>
        <input type="text" id="signup_name" name="user[username]" />
      </FormGroup>

      <FormGroup>
        <Label for="signup_email">Email: </Label>
        <input type="text" id="signup_email" name="user[email]" />
      </FormGroup>

      <FormGroup>
        <Label for="signup_password">Password: </Label>
        <input type="password" id="signup_password" name="user[password]" />
      </FormGroup>

      <FormGroup>
        <Label for="signup_passwordConfirmation">Confirm Password: </Label>
        <input
          type="password"
          id="signup_passwordConfirmation"
          name="user[passwordConfirmation]"
        />
      </FormGroup>

      <button type="submit">Signup</button>
    </SignupForm>
  </SignupContainer>
);

export default Signup;
