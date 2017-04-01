import React from 'react';
import ReactDOM from 'react-dom';
import style from './app.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import {
    Login
} from './containers/index';

console.log(Login);

ReactDOM.render((
  <Router>
      <div>
         <ul>
             <li><Link to="/login">Login</Link></li>
         </ul>

      <hr/>
      <Route exact path="/:id" component={Login}/>
    </div>
  </Router>
), document.getElementById('app'));
