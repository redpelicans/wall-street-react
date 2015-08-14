import React from 'react';
import Router from 'react-router';

import mui from 'material-ui';
let ThemeManager = new mui.Styles.ThemeManager();

class App extends React.Component {
  getChildContext() {
    return {muiTheme: ThemeManager.getCurrentTheme()};
  }

  render() {
    return (
      <div>
        <mui.AppBar title="Wall Street" showMenuIconButton={false} />
        <div style={{padding: '1em'}}>
          <Router.RouteHandler />
        </div>
      </div>
    );
  }
}

App.childContextTypes = {muiTheme: React.PropTypes.object};

export default App;
