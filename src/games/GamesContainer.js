import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router';
import { fetchGames } from '../actions/gameActions';
import { showMoreGames } from '../reducers/gamesReducer';
import GamesIndex from './GamesIndex';

const GamesContainer = ({ currentUser }) => {
  const dispatch = useDispatch();
  const games = useSelector(state => state.games.shownGames);
  const totalGamesCount = useSelector(state => state.totalCount);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  const getMoreShownGames = () => {
    console.log('here');
    if (games >= totalGamesCount) {
      setHasMore(false);
      return;
    }
    dispatch(showMoreGames());
  };

  return (
    <Switch>
      <Route exact path="/games">
        <GamesIndex
          games={games}
          totalGamesCount={totalGamesCount}
          getMoreShownGames={getMoreShownGames}
          hasMore={hasMore}
        />
      </Route>
    </Switch>
  );
};

export default GamesContainer;
