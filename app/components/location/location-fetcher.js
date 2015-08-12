import data from './location-data';

class LocationFetcher {
  fetch() {
    return new Promise(function(resolve) {
      setTimeout(function() {
        resolve(data);
      }, 2000);
    });
  }
}

export default new LocationFetcher(); // singleton
