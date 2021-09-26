import { Link } from 'react-router-dom';
import styled from 'styled-components';
import GameIndexDiv from './GameIndexDiv';

const GamesListContainer = styled.div`
  height: 90%;
  display: flex;
  justify-content: space-around;
`;

const GamesColumn = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const GamesIndex = ({ games }) => (
  <GamesListContainer>
    <GamesColumn>
      {games.slice(0, 4).map(game => (
        <GameIndexDiv game={game} />
      ))}
    </GamesColumn>
    <GamesColumn>
      {games.slice(4, 8).map(game => (
        <GameIndexDiv game={game} />
      ))}
    </GamesColumn>
  </GamesListContainer>
);

export default GamesIndex;
