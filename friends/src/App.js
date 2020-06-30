import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.css';
import Login from './components/Login';
import FriendCard from './components/FriendsList';
// import NavBar from './components/NavBar';
import PrivateRoute from './ProtectedRoute'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <Link to="/Login">Login</Link>
        </ul>
        <ul>
          <Link to="/protected">Protected Page</Link>
        </ul>
        <Switch>
          <PrivateRoute exact path="/protected" component={FriendCard} />
          <Route path="/Login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
