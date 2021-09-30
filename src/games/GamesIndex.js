import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import styled from 'styled-components';
import GameIndexDiv from './GameIndexDiv';

const GamesListContainer = styled.div`
  height: 100%;

  & .infinite-scroll-component__outerdiv {
    /* height: 100%; */
    /* overflow: auto; */
  }
`;

const GamesColumn = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  & > div {
    flex: 50%;
  }
`;

const GamesIndex = ({ games, getMoreShownGames, totalGamesCount, hasMore }) => {
  return (
    <GamesListContainer id="games-list-container">
      <InfiniteScroll
        // scrollableTarget="games-list-container"
        dataLength={games.length}
        hasMore={hasMore}
        next={getMoreShownGames}
        scrollThreshold="0"
        // style={{ height: '100%', overflow: 'auto' }}
      >
        <GamesColumn>
          {games.map(game => (
            <GameIndexDiv key={game.id} game={game} />
          ))}
        </GamesColumn>
      </InfiniteScroll>
    </GamesListContainer>
  );
};

export default GamesIndex;
