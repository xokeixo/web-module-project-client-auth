import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';
import Login from './components/Login';
import Logout from './components/Logout';
import AddFriend from './components/AddFriend';

function App() {
  return (
    <Router>
      <div className='App'>
        <h1>Friends Database</h1>
      <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/friends">Friendlist</Link>
          </li>
          <li>
            <Link to="/friends/add">AddFriend</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/friends" component={FriendsList} />
          <PrivateRoute exact path="/friends/add" component={AddFriend} />
          
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} /> 
        </Switch>   
      </div>
    </Router>
  );
}

export default App;
