import React from 'react';
import { Route, useRouteMatch, Switch } from 'react-router-dom';
import Home from './../pages/Home';
import NotFound from './../pages/NotFound';
import { defaultLocale } from '../../config/constants';

export default function Routes(props) {
  const { path, url } = useRouteMatch();

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
