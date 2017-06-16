var webpack = require('webpack')
var path = require('path')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

var ENV = process.env.NODE_ENV || 'development'

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': path.join(__dirname, 'src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        enforce: "pre",
        include: [path.join(__dirname, 'src')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [path.join(__dirname, 'src')]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': ENV === 'production' ? require('./config/prod.env.js') : require('./config/dev.env.js')
    }),
    new FriendlyErrorsPlugin()
  ],

  devtool: ENV === 'production' ? 'source-map' : 'cheap-module-eval-source-map',

  devServer: {
    port: process.env.PORT || 8080,
    host: 'localhost',
    publicPath: '/',
    contentBase: './public',
    historyApiFallback: true,
    open: false,
    overlay: true
  }
}
