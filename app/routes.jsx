import React from 'react';
import Router from 'react-router';
import App from './app';
import Home from './components/home/home';
import NotFound from './components/not-found/not-found';
import Location from './components/location/location';

let appRoutesData = [
  {route: 'location', text: 'Location', handler: Location}
];

let routes = (
  <Router.Route path="/" handler={App}>
    <Router.DefaultRoute handler={Home}/>
    <Router.NotFoundRoute handler={NotFound} />
    {appRoutesData.map((routeData) => {
      return (
        <Router.Route
          key={routeData.route}
          path={routeData.route}
          name={routeData.route}
          handler={routeData.handler}
        />
      );
    })}
  </Router.Route>
);

export default routes;
export {appRoutesData};
