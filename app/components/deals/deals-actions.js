import alt from '../../alt';
import axios from 'axios';
import _ from 'lodash';

class DealsActions {
  async getDeals(fofId) {
    try {
      let params = {};
      if (fofId) params.fofId = fofId;
      const response = await axios.get('http://rp1.redpelicans.com:6805/deals', {params});
      this.actions.updateDeals(response.data);
    } catch (error) {
      this.actions.failDeals(error);
    }
  }

  failDeals(error) {
    this.dispatch(error);
  }

  updateDeals(deals) {
    this.dispatch(deals);
  }

  setDealsFilter(filter) {
    this.dispatch(filter);
  }

  filterDeals() {
    _.defer(() => {
      this.dispatch();
    });
  }
}

export default alt.createActions(DealsActions);
