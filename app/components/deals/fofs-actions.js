import alt from '../../alt';
import axios from 'axios';

class FofsActions {
  async getFofs() {
    try {
      const response = await axios.get('http://rp1.redpelicans.com:6805/fofs');
      this.actions.updateFofs(response.data);
    } catch (error) {
      this.actions.failFofs(error);
    }
  }

  failFofs(error) {
    this.dispatch(error);
  }

  updateFofs(fofs) {
    this.dispatch(fofs);
    this.actions.setSelectedFofId();
  }

  setSelectedFofId(id) {
    this.dispatch(id);
  }
}

export default alt.createActions(FofsActions);
