import InfiniteScroll from 'react-infinite-scroll-component';
import styled from 'styled-components';
import GameIndexDiv from './GameIndexDiv';

const GamesListContainer = styled.div`
  height: 100%;
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

const GamesIndex = ({ games, getMoreShownGames, hasMore }) => {
  return (
    <GamesListContainer id="games-list-container">
      <InfiniteScroll
        dataLength={games.length}
        hasMore={hasMore}
        next={getMoreShownGames}
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
