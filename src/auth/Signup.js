import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { signupUser } from '../actions/userActions';

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

const Signup = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(signupUser({ username, email, password, passwordConfirmation }));
  };

  return (
    <SignupContainer>
      <PopupDiv>
        <SignupForm onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="signup_username">Username:</Label>
            <Input
              type="text"
              id="signup_username"
              name="user[username]"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <Label for="signup_email">Email:</Label>
            <Input
              type="text"
              id="signup_email"
              name="user[email]"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <Label for="signup_password">Password:</Label>
            <Input
              type="password"
              id="signup_password"
              name="user[password]"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <Label for="signup_passwordConfirmation">Confirm Password:</Label>
            <Input
              type="password"
              id="signup_passwordConfirmation"
              name="user[passwordConfirmation]"
              value={passwordConfirmation}
              onChange={e => setPasswordConfirmation(e.target.value)}
            />
          </FormGroup>

          <button type="submit">Signup</button>
        </SignupForm>
      </PopupDiv>
    </SignupContainer>
  );
};

export default Signup;
