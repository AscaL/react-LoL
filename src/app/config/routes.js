import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import MainContainer from '../containers/MainContainer';
import Main from '../components/Main';
import MainHeaderContainer from '../containers/MainHeaderContainer';
import RandomContainer from '../containers/RandomContainer';
import Random from '../components/Random';

export const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={RandomContainer}/>
      <Route path="random" component={RandomContainer} />
      <Route path="hello" component={MainHeaderContainer} />
    </Route>
  </Router>
);
