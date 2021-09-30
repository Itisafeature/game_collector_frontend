import { Link } from 'react-router-dom';
import styled from 'styled-components';

const GameDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledImg = styled.img`
  display: block;
  max-width: 230px;
  max-height: 95px;
  width: auto;
  height: auto;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: red;
  margin: auto;
`;

const GameIndexDiv = ({ game }) => (
  <GameDiv>
    <StyledLink to={`games/${game.id}`}>
      <h3>{game.title}</h3>
      <StyledImg src={game.image} alt={game.title}></StyledImg>
    </StyledLink>
  </GameDiv>
);

export default GameIndexDiv;
