import React from 'react';
import mui from 'material-ui';
import _ from 'lodash';
import AltContainer from 'alt/AltContainer';
import FofsStore from './fofs-store';
import FofsActions from './fofs-actions';
import DealsStore from './deals-store';
import DealsActions from './deals-actions';

class DealsContainer extends React.Component {
  componentDidMount() {
    FofsActions.getFofs();
  }

  render() {
    return (
      <div>
        <ListContainer />
      </div>
    );
  }
}

class ListContainer extends React.Component {
  constructor() {
    super();
    this.onChangeDealsFilter = this.onChangeDealsFilter.bind(this);
  }

  componentWillMount() {
    // see http://stackoverflow.com/questions/23123138/perform-debounce-in-react-js
    this.onChangeDealsFilterThrottled = _.throttle(this.onChangeDealsFilterThrottled, 500, {leading: false});
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
      <AltContainer store={DealsStore}>
        <ListView onChangeDealsFilter={this.onChangeDealsFilter} />
      </AltContainer>
    );
  }
}

class ListView extends React.Component {
  render() {
    let headers = [
      'Fof',
      'Fund',
      'Amount',
      'Trading date',
      'Notice date',
      'Price date',
      'Payment date',
      'Status',
      'Trader'
    ];
    return (
      <mui.Table selectable={false}>
        <mui.TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <mui.TableRow>
            <mui.TableHeaderColumn colSpan={headers.length}>
              <DealsFilterView {...this.props} />
            </mui.TableHeaderColumn>
          </mui.TableRow>
          <mui.TableRow>
            {headers.map((header) => {
              return <mui.TableHeaderColumn key={header}>{header}</mui.TableHeaderColumn>;
            })}
          </mui.TableRow>
        </mui.TableHeader>
        <mui.TableBody showRowHover={true} displayRowCheckbox={false}>
          {this.props.filteredDeals.map((deal) => {
            return (
              <mui.TableRow key={deal.id}>
                <mui.TableRowColumn>{deal.fof.label}</mui.TableRowColumn>
                <mui.TableRowColumn>{deal.fund.label}</mui.TableRowColumn>
                <mui.TableRowColumn>{deal.amount}</mui.TableRowColumn>
                <mui.TableRowColumn>{deal.tradingDate}</mui.TableRowColumn>
                <mui.TableRowColumn>{deal.noticeDate}</mui.TableRowColumn>
                <mui.TableRowColumn>{deal.priceDate}</mui.TableRowColumn>
                <mui.TableRowColumn>{deal.paymentDate}</mui.TableRowColumn>
                <mui.TableRowColumn>{deal.status}</mui.TableRowColumn>
                <mui.TableRowColumn>{deal.trader}</mui.TableRowColumn>
              </mui.TableRow>
            );
          })}
        </mui.TableBody>
      </mui.Table>
    );
  }
}

class DealsFilterView extends React.Component {
  constructor() {
    super();
    this.state = {hintLabel: 'Search in fund labels'};
    this.onFocusDealsFilter = this.onFocusDealsFilter.bind(this);
    this.onBlurDealsFilter = this.onBlurDealsFilter.bind(this);
  }

  componentDidMount() {
    this.setState({hint: _.isEmpty(this.props.filter)});
    this.refs.dealsFilterTextField.setValue(this.props.filter);
  }

  onFocusDealsFilter() {
    this.setState({hint: false});
  }

  onBlurDealsFilter(e) {
    this.setState({hint: _.isEmpty(e.target.value)});
  }

  render() {
    return (
      <mui.TextField
        ref="dealsFilterTextField"
        hintText={this.state.hintLabel}
        floatingLabelText={this.state.hint ? this.state.hintLabel : `Number of deals: ${this.props.filteredDeals.length}/${this.props.deals.length}`}
        underlineStyle={{borderColor: 'transparent'}}
        onChange={this.props.onChangeDealsFilter}
        onFocus={this.onFocusDealsFilter}
        onBlur={this.onBlurDealsFilter}
      />
    );
  }
}

export default DealsContainer;
