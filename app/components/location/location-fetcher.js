import data from './location-data';

class LocationFetcher {
  fetch() {
    let deferred = Promise.defer();

    setTimeout(function() {
      deferred.resolve(data);
    }, 2000);

    return deferred;
  }
}

export default new LocationFetcher(); // singleton
