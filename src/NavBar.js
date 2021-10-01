import React from 'react';
import { NavLink, useHistory, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { logoutUser } from './actions/userActions';
import { clearGames } from './reducers/gamesReducer';

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

const StyledLogoutSpan = styled.span`
  text-decoration: none;
  color: pink;
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;

const NavBar = ({ loggedIn }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser(null)).then(() => dispatch(clearGames()));
    history.push('/login'); // Fix this
  };

  return (
    <NavBarContainer>
      {loggedIn ? null : (
        <>
          <StyledLink to="/login">Login</StyledLink>
          <StyledLink to="/signup">Signup</StyledLink>
        </>
      )}

      {!loggedIn ? null : (
        <>
          <StyledLink to="/home">Home</StyledLink>
          <StyledLogoutSpan onClick={handleLogout}>Logout</StyledLogoutSpan>
        </>
      )}
    </NavBarContainer>
  );
};

export default withRouter(NavBar);
