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
`;

const Signup = () => (
  <SignupContainer>
    <SignupForm>
      <span>
        Name: <input type="text" name="user[username]" />
      </span>
      <span>
        Email: <input type="text" name="user[email]" />
      </span>
      <span>
        Password: <input type="password" name="user[password]" />
      </span>
      <span>
        Confirm Password:{' '}
        <input type="password" name="user[passwordConfirmation]" />
      </span>
      <button type="submit">Signup</button>
    </SignupForm>
  </SignupContainer>
);

export default Signup;
