import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import styled from 'styled-components';
import GameIndexDiv from './GameIndexDiv';

const GamesListContainer = styled.div`
  height: 100%;
  /* flex: 1; */
  overflow: auto;

  & .infinite-scroll-component__outerdiv {
    height: 100%;
    /* overflow: auto; */
  }
`;

const GamesColumn = styled.div`
  height: auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  & > div {
    flex: 50%;
  }
`;

const GamesIndex = ({ games }) => {
  const [numberLoaded, setNumberLoaded] = useState({
    end: 8,
    hasMore: true,
  });

  const getMoreGames = () => {
    console.log('here1');
    if (numberLoaded.end >= games.length) {
      setNumberLoaded(prevState => ({
        ...prevState,
        hasMore: false,
      }));
      return;
    }
    console.log('here');

    setNumberLoaded(prevState => ({
      ...prevState,
      end: prevState.end + 8,
    }));
  };

  return (
    <GamesListContainer id="games-list-container">
      <InfiniteScroll
        scrollableTarget="games-list-container"
        dataLength={numberLoaded.end - 1}
        hasMore={numberLoaded.hasMore}
        next={getMoreGames}
        style={{ height: '100%', overflow: 'auto' }}
      >
        <GamesColumn>
          {games.slice(0, numberLoaded.end).map(game => (
            <GameIndexDiv key={game.id} game={game} />
          ))}
        </GamesColumn>
      </InfiniteScroll>
    </GamesListContainer>
  );
};

export default GamesIndex;
