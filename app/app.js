import React from 'react';
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
        <div className="pure-g">
          <div className="pure-u-1-3"><p>Thirds</p></div>
          <div className="pure-u-1-3"><p>Thirds</p></div>
          <div className="pure-u-1-3"><p>Thirds</p></div>
        </div>
      </div>
    );
  }
}

App.childContextTypes = {muiTheme: React.PropTypes.object};

export default App;
