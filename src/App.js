import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router';
import './App.css';
import Signup from './auth/Signup';
import NavBarContainer from './NavBar';

const App = () => {
  const currentUser = useSelector(state => state.users.currentUser);

  console.log(currentUser);
  return (
    <div className="App">
      <NavBarContainer loggedIn={currentUser ? true : false} />
      <Switch>
        <Route exact path="/signup">
          <Signup />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
