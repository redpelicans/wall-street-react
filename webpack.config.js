var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: '#eval-source-map',
  entry: [
    'webpack-dev-server/client?http://rp1.redpelicans.com:6804',
    'webpack/hot/dev-server',
    path.join(__dirname, 'app', 'index')
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {test: /\.jsx?$/, loaders: ['react-hot', 'babel'], include: path.join(__dirname, 'app')},
      {test: /\.css$/, loader: 'style!css!autoprefixer-loader?browsers=last 2 versions'},
      {test: /\.less$/, loader: 'style!css!autoprefixer-loader?browsers=last 2 versions!less'}
    ]
  },
}
