import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Clubs from './clubs';
import Designers from './designers';

const Routes: React.SFC = () => {
  return (
    <Switch>
      <Route path="/clubs" component={Clubs} />
      <Route path="/designers" component={Designers} />
      <Redirect from="/" to="/clubs" />
    </Switch>
  );
};

export default Routes;