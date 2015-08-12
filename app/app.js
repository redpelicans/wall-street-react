import React from 'react';
import mui from 'material-ui';

import Location from './components/location/location';

let ThemeManager = new mui.Styles.ThemeManager();

class App extends React.Component {
  getChildContext() {
    return {muiTheme: ThemeManager.getCurrentTheme()};
  }

  render() {
    let gridStyle = {
      padding: '1em'
    };

    return (
      <div>
        <mui.AppBar title="Wall Street" showMenuIconButton={false} />
        <div className="pure-g" style={gridStyle}>
          <div className="pure-u-1-3">
            <Location label="Left"/>
          </div>
          <div className="pure-u-1-3">
            <Location label="Middle"/>
          </div>
          <div className="pure-u-1-3">
            <Location label="Right"/>
          </div>
        </div>
      </div>
    );
  }
}

App.childContextTypes = {muiTheme: React.PropTypes.object};

export default App;
