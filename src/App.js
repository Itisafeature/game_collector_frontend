import axios from 'axios';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router';
import { useHistory } from 'react-router-dom';
import './App.css';
import Login from './auth/Login';
import Signup from './auth/Signup';
import NavBarContainer from './NavBar';
import PrivateRoute from './routes/PrivateRoute';
import { remove } from './reducers/userReducer';
import GamesContainer from './games/GamesContainer';
import GameShow from './games/GameShow';
import { fetchGames } from './actions/gameActions';

const App = props => {
  const currentUser = useSelector(state => state.users.currentUser);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const checkToken = async () => {
      try {
        await axios.get('/verifyToken');
        dispatch(fetchGames());
      } catch (err) {
        dispatch(remove());
        history.push('/login');
      }
    };

    if (currentUser) {
      checkToken();
    }
  }, [currentUser, history, dispatch]);

  return (
    <div className="App">
      <NavBarContainer loggedIn={currentUser ? true : false} />
      <Switch>
        <Route exact path="/signup">
          <Signup history={history} />
        </Route>
        <Route exact path="/login">
          <Login history={history} />
        </Route>

        <PrivateRoute
          component={GamesContainer}
          currentUser={currentUser}
          exact
          path="/games"
        />

        <PrivateRoute
          component={GameShow}
          currentUser={currentUser}
          exact
          path="/games/:slug"
        />
      </Switch>
    </div>
  );
};

export default App;
