import { Switch, Route } from 'react-router';
import './App.css';
import Signup from './auth/Signup';
import NavBarContainer from './NavBar';

const App = () => {
  return (
    <div className="App">
      <NavBarContainer />
      <Switch>
        <Route exact path="/signup">
          <Signup />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
