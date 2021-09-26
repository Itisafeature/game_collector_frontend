import { Link } from 'react-router-dom';
import styled from 'styled-components';

const GameDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
`;

const StyledImg = styled.img`
  display: block;
  max-width: 230px;
  max-height: 95px;
  width: auto;
  height: auto;
`;

const GameIndexDiv = ({ game }) => (
  <GameDiv>
    <h3>{game.title}</h3>
    <Link to={`games/${game.id}`}>
      <StyledImg src={game.image} alt={game.title}></StyledImg>
    </Link>
  </GameDiv>
);

export default GameIndexDiv;
