import alt from '../../alt';
import LocationActions from './location-actions';

class LocationFavoriteStore {
  constructor() {
    this.locations = [];

    this.bindListeners({
      favoriteLocationHandler: LocationActions.FAVORITE_LOCATION
    });
  }

  favoriteLocationHandler(location) {
    this.locations.push(location);
  }
}

export default alt.createStore(LocationFavoriteStore, 'LocationFavoriteStore');
