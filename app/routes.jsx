import React from 'react';

import Router from 'react-router';
let Route = Router.Route;

import App from './app';
import Location from './components/location/location';

let routes = (
  <Route handler={App}>
    <Route path="location" handler={Location} />
  </Route>
);

export default routes;
