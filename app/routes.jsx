import React from 'react';
import Router from 'react-router';
import App from './app';
import Home from './components/home/home';
import NotFound from './components/not-found/not-found';
import Location from './components/location/location';

let routes = (
  <Router.Route path="/" handler={App}>
    <Router.DefaultRoute handler={Home}/>
    <Router.NotFoundRoute handler={NotFound} />
    <Router.Route path="location" handler={Location} />
  </Router.Route>
);

export default routes;
