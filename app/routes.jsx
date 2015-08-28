import React from 'react';
import Router from 'react-router';
import App from './app';
import Home from './components/home/home';
import NotFound from './components/not-found/not-found';
import Location from './components/location/location';
import DealsContainer from './components/deals/deals';

let appRoutesData = [
  {route: 'location', label: 'Location', handler: Location},
  {route: 'deals', label: 'Deals', handler: DealsContainer}
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
