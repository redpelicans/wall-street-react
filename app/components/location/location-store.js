import _ from 'lodash';
import alt from '../../alt';
import LocationActions from './location-actions';
import LocationFavoriteStore from './location-favorite-store';

class LocationStore {
  constructor() {
    this.locations = [];
    this.error = undefined;

    this.bindListeners({
      updateLocationsHandler: LocationActions.UPDATE_LOCATIONS,
      fetchLocationsHandler: LocationActions.FETCH_LOCATIONS,
      failLocationsHandler: LocationActions.FAIL_LOCATIONS,
      favoriteLocationHandler: LocationActions.FAVORITE_LOCATION
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

  favoriteLocationHandler(location) {
    this.waitFor(LocationFavoriteStore);
    
    LocationFavoriteStore.getState().locations.forEach((favoriteLocation) => {
      let location = _.find(this.locations, 'id', favoriteLocation.id);
      if (location) location.isFavorite = true;
    });
  }
}

export default alt.createStore(LocationStore, 'LocationStore');
