import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

function App() {
  const isLoggedIn = localStorage.getItem(token);
  
  return (
    <Router>
      <div className='App'>
        <h1>Friends Database</h1>
      <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/">Friendlist</Link>
          </li>
          <li>
            <Link to="/">AddFriend</Link>
          </li>
          <li>
            <Link to="/">Logout</Link>
          </li>
        </ul>
        {/* <Switch>
          <PrivateRoute exact path="/protected" component={GasPrices} />
          <Route path="/" component={Logout} />

          <Route path="/" component={Login} />
          <Route path="/" component={Login} /> 
        </Switch>    */}
      </div>
    </Router>
    // <div className="App">
    //   <h2>Login</h2>
    // </div>
  );
}

export default App;
