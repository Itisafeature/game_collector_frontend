import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router';
import { fetchGames } from '../actions/gameActions';
import GamesIndex from './GamesIndex';

const GamesContainer = ({ currentUser }) => {
  const dispatch = useDispatch();
  const games = useSelector(state => state.games.data);

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  return (
    <Switch>
      <Route exact path="/games">
        <GamesIndex games={games} />
      </Route>
    </Switch>
  );
};

export default GamesContainer;
