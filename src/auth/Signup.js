import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { signupUser } from '../actions/userActions';

const SignupContainer = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SignupHeader = styled.header`
  margin: 5% 0 2% 0;
  font-size: 1.2em;
  color: pink;
`;

const PopupDiv = styled.div`
  height: 30%;
  width: 30%;
  z-index: 1;
  background-color: white;
  box-shadow: 0 0 5px 5px red;
  display: flex;
  flex-direction: column;
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

const Signup = ({ history }) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(
      signupUser({
        user: { username, email, password, passwordConfirmation },
      })
    ).then(() => history.push('/games'));
  };

  return (
    <SignupContainer>
      <SignupHeader>Signup to keep track of your games!</SignupHeader>
      <PopupDiv>
        <SignupForm onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="signup_username">Username:</Label>
            <Input
              type="text"
              id="signup_username"
              name="user[username]"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="signup_email">Email:</Label>
            <Input
              type="text"
              id="signup_email"
              name="user[email]"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="signup_password">Password:</Label>
            <Input
              type="password"
              id="signup_password"
              name="user[password]"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="signup_passwordConfirmation">
              Confirm Password:
            </Label>
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
