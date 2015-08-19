import React from 'react';
import mui from 'material-ui';
import alt from 'alt';
import AltContainer from 'alt/AltContainer';
import LocationStore from '../location/location-store';

class HomeContainer extends React.Component {
  render() {
    return (
      <AltContainer store={LocationStore}>
        <HomeView />
      </AltContainer>
    );
  }
}

class HomeView extends React.Component {
  render() {
    return (
      <table className="pure-table pure-table-horizontal pure-table-striped" style={{margin: '1em'}}>
        <thead>
          <th>Id</th>
          <th>Name</th>
          <th>Favorite</th>
        </thead>
        <tbody>
          {this.props.locations.map((location) => {
            let isFavoriteIcon = (
              <mui.FontIcon className="material-icons">
                {location.isFavorite ? 'favorite' : 'favorite_border'}
              </mui.FontIcon>
            );
            return (
              <tr key={location.id}>
                <td>{location.id}</td>
                <td>{location.name}</td>
                <td>{isFavoriteIcon}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default HomeContainer;
