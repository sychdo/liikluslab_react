import React from 'react';
import { Route, useRouteMatch, Switch } from 'react-router-dom';
import Home from './../pages/Home';
import NotFound from './../pages/NotFound';

export default function Routes(props) {
  const { path } = useRouteMatch();

  return (
    <>
      <Switch>
        <Route exact path={`${path}/`}>
          <Home />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}
