import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import MainContainer from '../containers/MainContainer';

export const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={MainContainer}>
      <IndexRoute component={HomeContainer}/>
    </Route>
  </Router>
);
