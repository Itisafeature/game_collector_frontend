import axios from 'axios';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router';
import { useHistory, Redirect } from 'react-router-dom';
import './App.css';
import Login from './auth/Login';
import Signup from './auth/Signup';
import NavBarContainer from './NavBar';
import PrivateRoute from './routes/PrivateRoute';
import Temp from './Temp';
import Home from './Users/Home';
import { remove } from './reducers/userReducer';

const App = () => {
  const currentUser = useSelector(state => state.users.currentUser);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const checkToken = async () => {
      try {
        await axios.get('/verifyToken');
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
          <Signup />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <PrivateRoute currentUser={currentUser} exact path="/">
          <Temp currentUser={currentUser} />
        </PrivateRoute>
        <PrivateRoute currentUser={currentUser} exact path="/home">
          <Home currentUser={currentUser}></Home>
        </PrivateRoute>
      </Switch>
    </div>
  );
};

export default App;
