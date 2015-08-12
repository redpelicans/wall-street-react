import alt from '../../alt';
import LocationFetcher from './location-fetcher';

class LocationActions {
  fetchLocations() {
    this.dispatch(); // trigger the loading state

    LocationFetcher.fetch()
      .then((locations) => {
        this.actions.updateLocations(locations);
      })
      .catch((error) => {
        this.actions.failLocations(error);
      });
  }

  failLocations(error) {
    this.dispatch(error);
  }

  updateLocations(locations) {
    this.dispatch(locations);
  }
}

export default alt.createActions(LocationActions);
