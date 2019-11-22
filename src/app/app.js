import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Header, Navigator } from '../containers';
import { HomePage, LoginPage } from '../pages';

import './app.scss';

const App = () => {
  return (
    <Fragment>
      <Navigator></Navigator>
      {/* <h2>Front teste</h2>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<Navigator></Navigator>
			<ul className="navbar-nav mr-auto">
			<li><Link to={'/'} className="nav-link"> Home </Link></li>
			<li><Link to={'/login'} className="nav-link">Login</Link></li>
			<li><Link to={'/about'} className="nav-link">About</Link></li>
			</ul>
				</nav>
			<hr /> */}
      <main>
        <Header></Header>

        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
          </Switch>
        </Router>
      </main>
    </Fragment>
  );
};

export default App;
