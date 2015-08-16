import co from 'co';
import alt from '../../alt';
import LocationFetcher from './location-fetcher';

class LocationActions {
  fetchLocations() {
    this.dispatch(); // trigger the loading state

    co(function *() { return yield LocationFetcher.fetch().promise; })
      .then(this.actions.updateLocations)
      .catch(this.actions.failLocations);
  }

  failLocations(error) {
    this.dispatch(error);
  }

  updateLocations(locations) {
    this.dispatch(locations);
  }

  favoriteLocation(location) {
    this.dispatch(location);
  }
}

export default alt.createActions(LocationActions);
