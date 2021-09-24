import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router';
import './App.css';
import Login from './auth/Login';
import Signup from './auth/Signup';
import NavBarContainer from './NavBar';
import PrivateRoute from './routes/PrivateRoute';
import Temp from './Temp';

const App = () => {
  const currentUser = useSelector(state => state.users.currentUser);

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
      </Switch>
    </div>
  );
};

export default App;
