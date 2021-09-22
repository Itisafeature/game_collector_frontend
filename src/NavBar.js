import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavBarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 10%;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: pink;
  margin-right: 10px;

  &:hover {
    color: red;
  }
`;

const NavBar = ({ loggedIn }) => {
  return (
    <NavBarContainer>
      {loggedIn ? null : (
        <>
          <StyledLink to="/login">Login</StyledLink>
          <StyledLink to="/signup">Signup</StyledLink>
        </>
      )}
    </NavBarContainer>
  );
};

export default NavBar;
