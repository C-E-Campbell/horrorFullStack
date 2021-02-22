import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Landing from './pages/Landing/Landing.jsx';
import Signup from './pages/SignUp/Signup.jsx';
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
