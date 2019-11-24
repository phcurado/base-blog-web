import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Header, Navigator, PublicRoute, PrivateRoute } from '../containers';
import { HomePage, LoginPage } from '../pages';

import './app.scss';

const App = () => {
  return (
    <Router>
      <Navigator></Navigator>
      <div className="wrapper">
        <Header>Header</Header>
        <main>
          <Switch>
            <PublicRoute path="/login" component={LoginPage} />
            <PrivateRoute path="/" component={HomePage} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
