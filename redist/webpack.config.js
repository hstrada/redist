const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  target: 'node',
  output: {
    path: path.join(__dirname, '/dist'), // the bundle output path
    filename: 'bundle.js' // the name of the bundle
  },
  devServer: {
    port: 3000 // you can change the port
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
        loader: 'url-loader',
        options: { limit: false }
      },
      {
        test: /\.css$/i,
        use: ['css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['ts', '.js', '.jsx', 'tsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html' // to import index.html file inside index.js
    }),
    new NodePolyfillPlugin()
  ]
};
