import React from 'react';
import mui from 'material-ui';
import AltContainer from 'alt/AltContainer';
import FofsStore from './fofs-store';
import FofsActions from './fofs-actions';
import DealsStore from './deals-store';
import DealsActions from './deals-actions';

class DealsContainer extends React.Component {
  render() {
    return (
      <div>
        <ToolbarContainer />
        <ListContainer />
      </div>
    );
  }
}

class ToolbarContainer extends React.Component {
  constructor() {
    super();
    this.onChangeSelectedFofId = this.onChangeSelectedFofId.bind(this);
    this.onChangeDealsFilter = this.onChangeDealsFilter.bind(this);
  }

  componentWillMount() {
    // see http://stackoverflow.com/questions/23123138/perform-debounce-in-react-js
    this.onChangeDealsFilterThrottled = _.throttle(this.onChangeDealsFilterThrottled, 500, {leading: false});
  }

  componentDidMount() {
    FofsActions.getFofs();
  }

  onChangeSelectedFofId(e, selectedIndex, menuItem) {
    FofsActions.setSelectedFofId(menuItem.id);
  }

  onChangeDealsFilterThrottled(e) {
    DealsActions.setDealsFilter(e.target.value);
  }

  onChangeDealsFilter(e) {
    e.persist();
    this.onChangeDealsFilterThrottled(e);
  }

  render() {
    return (
      <AltContainer store={FofsStore}>
        <ToolbarView
          onChangeSelectedFofId={this.onChangeSelectedFofId}
          onChangeDealsFilter={this.onChangeDealsFilter}
        />
      </AltContainer>
    );
  }
}

class ToolbarView extends React.Component {
  render() {
    return (
      <mui.Toolbar>
        <mui.ToolbarGroup key={0} float="left">
          <mui.DropDownMenu
            displayMember="label"
            valueMember="id"
            menuItems={this.props.fofs}
            onChange={this.props.onChangeSelectedFofId}
          />
          {this.props.fofs.map((fof) => {
            return (
              <mui.FlatButton label={fof.label} />
            );
          })}
        </mui.ToolbarGroup>
        <mui.ToolbarGroup key={1} float="right">
          <mui.TextField
            hintText="Search in fund labels"
            onChange={this.props.onChangeDealsFilter}
          />
        </mui.ToolbarGroup>
      </mui.Toolbar>
    );
  }
}

class ListContainer extends React.Component {
  render() {
    return (
      <AltContainer store={DealsStore}>
        <ListView />
      </AltContainer>
    );
  }
}

class ListView extends React.Component {
  render() {
    return (
      <table className="pure-table pure-table-horizontal pure-table-striped">
        <thead>
          <tr>
            <td>Fof</td>
            <td>Fund</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          {this.props.filteredDeals.map((deal) => {
            return (
              <tr key={deal.id}>
                <td>{deal.fof.label}</td>
                <td>{deal.fund.label}</td>
                <td>{deal.amount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default DealsContainer;
