import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Main from '../components/Main';
import MainHeaderContainer from '../containers/MainHeaderContainer';
import SearchMatchesContainer from '../containers/SearchMatchesContainer';

export const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={SearchMatchesContainer}/>
      <Route path="matches" component={SearchMatchesContainer} />
      <Route path="hello" component={MainHeaderContainer} />
    </Route>
  </Router>
);

