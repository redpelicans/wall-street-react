import React from 'react';
import mui from 'material-ui';
import LocationStore from './location-store';
import LocationActions from './location-actions';

class Location extends React.Component {
  constructor() {
    super();
    this.state = LocationStore.getState();

    // prebind (autobinding issue)
    this.onChange = this.onChange.bind(this);
    this.favoriteLocation = this.favoriteLocation.bind(this);
  }

  componentDidMount() {
    LocationStore.listen(this.onChange);

    LocationActions.fetchLocations();
  }

  componentWillUnmount() {
    LocationStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  favoriteLocation(location) {
    LocationActions.favoriteLocation(location);
  }

  render() {
    if (this.state.error) {
      return (
        <mui.Card>
          <mui.CardTitle title={this.state.error.name} subtitle={this.state.error.message} />
          <mui.CardText>{this.state.error.stack}</mui.CardText>
        </mui.Card>
      );
    }

    if (!this.state.locations.length) {
      return <mui.LinearProgress mode="indeterminate" size={2} />;
    }

    return (
      <mui.List subheader={this.props.label}>
        {this.state.locations.map((location) => {
          let isFavoriteIcon = (
            <mui.FontIcon className="material-icons">
              {location.isFavorite ? 'favorite' : 'favorite_border'}
            </mui.FontIcon>
          );
          return (
            <mui.ListItem
              primaryText={location.name}
              key={location.id}
              leftIcon={isFavoriteIcon}
              onClick={this.favoriteLocation.bind(null, location)}
            />
          );
        })}
      </mui.List>
    );
  }
}

Location.propTypes = {label: React.PropTypes.string};

export default Location;
