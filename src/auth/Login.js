import { useState } from 'react';
import { useDispatch } from 'react-redux';

import styled from 'styled-components';
import { loginUser } from '../actions/userActions';

const LoginContainer = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginHeader = styled.header`
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

const LoginForm = styled.form`
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

const Login = ({ history }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(
      loginUser({
        user: { email, password },
      })
    ).then(() => history.push('/games'));
  };

  return (
    <LoginContainer>
      <LoginHeader>Login to keep track of your games!</LoginHeader>
      <PopupDiv>
        <LoginForm onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="login_email">Email:</Label>
            <Input
              type="text"
              id="login_email"
              name="user[email]"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="login_password">Password:</Label>
            <Input
              type="password"
              id="login_password"
              name="user[password]"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </FormGroup>

          <button type="submit">Login</button>
        </LoginForm>
      </PopupDiv>
    </LoginContainer>
  );
};

export default Login;
