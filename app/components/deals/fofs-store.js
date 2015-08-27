import _ from 'lodash';
import alt from '../../alt';
import FofsActions from './fofs-actions';

class FofsStore {
  constructor() {
    this.fofs = [];
    this.selectedFofId = undefined;
    this.error = undefined;

    this.bindListeners({
      updateFofsHandler: FofsActions.UPDATE_FOFS,
      failFofsHandler: FofsActions.FAIL_FOFS,
      setSelectedFofIdHandler: FofsActions.SET_SELECTED_FOF_ID
    });
  }

  updateFofsHandler(fofs) {
    this.error = undefined;
    this.fofs = fofs;
    this.fofs.unshift({label: 'All'});
    this.setSelectedFofIdHandler(this.selectedFofId);
  }

  failFofsHandler(error) {
    this.error = error;
  }

  setSelectedFofIdHandler(id) {
    this.selectedFofId = (id && _.find(this.fofs, 'id', id)) ? id : _.first(this.fofs).id;
  }
}

export default alt.createStore(FofsStore, 'FofsStore');
