import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavBarContainer = styled.div`
  display: flex;
`;

const NavBar = ({ loggedIn }) => {
  return (
    <NavBarContainer>
      <NavLink to="/signup">Signup</NavLink>
    </NavBarContainer>
  );
};

export default NavBar;
