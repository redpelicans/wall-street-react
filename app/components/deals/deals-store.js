import _ from 'lodash';
import alt from '../../alt';
import DealsActions from './deals-actions';
import FofsStore from './fofs-store';
import FofsActions from './fofs-actions';

class DealsStore {
  constructor() {
    this.deals = [];
    this.filteredDeals = [];
    this.error = undefined;
    this.filter = '';

    this.bindListeners({
      updateDealsHandler: DealsActions.UPDATE_DEALS,
      failDealsHandler: DealsActions.FAIL_DEALS,
      setSelectedFofIdHandler: FofsActions.SET_SELECTED_FOF_ID,
      setDealsFilterHandler: DealsActions.SET_DEALS_FILTER,
      filterDealsHandler: DealsActions.FILTER_DEALS
    });
  }

  updateDealsHandler(deals) {
    this.error = undefined;
    this.deals = deals;
    DealsActions.filterDeals();
  }

  failDealsHandler(error) {
    this.error = error;
  }

  setSelectedFofIdHandler() {
    this.waitFor(FofsStore);
    DealsActions.getDeals(FofsStore.getState().selectedFofId);
  }

  setDealsFilterHandler(filter) {
    this.filter = filter;
    DealsActions.filterDeals();
  }

  filterDealsHandler() {
    if (_.isEmpty(this.filter)) return this.filteredDeals = this.deals;
    this.filteredDeals = _.select(this.deals, (deal) => {
      return deal.fund.label.toLowerCase().indexOf(this.filter) !== -1;
    });
  }
}

export default alt.createStore(DealsStore, 'DealsStore');
