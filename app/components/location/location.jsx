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

  render() {
    if (this.state.error) {
      return <mui.Snackbar message={this.state.error} autoHideDuration={1000} />;
    }

    if (!this.state.locations.length) {
      return <mui.CircularProgress mode="indeterminate" size={2} />;
    }

    return (
      <mui.List subheader={this.props.label}>
        {this.state.locations.map((location) => {
          return <mui.ListItem primaryText={location.name} key={location.id} />;
        })}
      </mui.List>
    );
  }
}

Location.propTypes = {label: React.PropTypes.string};

export default Location;
