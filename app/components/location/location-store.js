import alt from '../../alt';
import LocationActions from './location-actions';

class LocationStore {
  constructor() {
    this.locations = [];
    this.error = undefined;

    this.bindListeners({
      updateLocationsHandler: LocationActions.UPDATE_LOCATIONS,
      fetchLocationsHandler: LocationActions.FETCH_LOCATIONS,
      failLocationsHandler: LocationActions.FAIL_LOCATIONS
    });
  }

  updateLocationsHandler(locations) {
    this.locations = locations;
    this.error = undefined;
  }

  fetchLocationsHandler() {
    this.locations = []; // reset locations while fetching to have a loading state
  }

  failLocationsHandler(error) {
    this.error = error;
  }
}

export default alt.createStore(LocationStore, 'LocationStore');
