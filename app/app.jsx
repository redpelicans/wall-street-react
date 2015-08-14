import _ from 'lodash';
import React from 'react';
import Router from 'react-router';
import routes, {appRoutesData as menuItems} from './routes';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import mui from 'material-ui';
let ThemeManager = new mui.Styles.ThemeManager();

class App extends React.Component {
  constructor() {
    super();

    this.toggleLeftNav = this.toggleLeftNav.bind(this);
    this.onLeftNavChange = this.onLeftNavChange.bind(this);
    this.onLeftNavHeaderClick = this.onLeftNavHeaderClick.bind(this);
    this.getSelectedIndex = this.getSelectedIndex.bind(this);
  }

  getChildContext() {
    return {muiTheme: ThemeManager.getCurrentTheme()};
  }

  componentWillMount() {
    ThemeManager.setPalette({
      primary1Color: mui.Styles.Colors.green500,
      primary2Color: mui.Styles.Colors.green700,
      primary3Color: mui.Styles.Colors.green100,
    });
  }

  toggleLeftNav() {
    this.refs.leftNav.toggle();
  }

  getSelectedIndex() {
    return _.findIndex(menuItems, (menuItem) => {
      return menuItem.route && this.context.router.isActive(menuItem.route);
    });
  }

  onLeftNavChange(event, key, payload) {
    this.context.router.transitionTo(payload.route);
  }

  onLeftNavHeaderClick() {
    this.context.router.transitionTo('/');
    this.refs.leftNav.close();
  }

  render() {
    let headerLeftNavStyle = {
      cursor: 'pointer',
      color: ThemeManager.getCurrentTheme().component.appBar.textColor,
      backgroundColor: ThemeManager.getCurrentTheme().palette.primary1Color,
      lineHeight: mui.Styles.Spacing.desktopKeylineIncrement + 'px',
      paddingLeft: mui.Styles.Spacing.desktopGutter,
    };

    let header = (
      <div style={headerLeftNavStyle} onTouchTap={this.onLeftNavHeaderClick}>Wall Street</div>
    );

    return (
      <div>
        <mui.AppBar title="Wall Street" onLeftIconButtonTouchTap={this.toggleLeftNav} />
        <mui.LeftNav
          ref="leftNav"
          docked={false}
          header={header}
          menuItems={menuItems}
          onChange={this.onLeftNavChange}
          selectedIndex={this.getSelectedIndex()}
        />
        <Router.RouteHandler />
      </div>
    );
  }
}

App.childContextTypes = {muiTheme: React.PropTypes.object};
App.contextTypes = {router: React.PropTypes.func};

export default App;
