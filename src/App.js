import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Landing from './pages/Landing/Landing.jsx';
import Login from './pages/Login/Login.jsx';
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
