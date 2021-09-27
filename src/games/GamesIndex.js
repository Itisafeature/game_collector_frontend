import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import GameIndexDiv from './GameIndexDiv';

const GamesListContainer = styled.div`
  height: 90%;
`;

const GamesColumn = styled.div`
  min-height: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  & > div {
    flex: 50%;
  }
`;

const StyledScroll = styled(InfiniteScroll)`
  height: 100%;
`;

const GamesIndex = ({ games }) => {
  const [currentEnd, setcurrentEnd] = useState(7);

  return (
    <GamesListContainer>
      <StyledScroll dataLength={games.length}>
        <GamesColumn>
          {games.slice(0, 8).map(game => (
            <GameIndexDiv game={game} />
          ))}
        </GamesColumn>
      </StyledScroll>
    </GamesListContainer>
  );
};

export default GamesIndex;
