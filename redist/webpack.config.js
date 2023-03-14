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
        test: /\.(js|jsx)$/, // .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
        loader: 'url-loader',
        options: { limit: false }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html' // to import index.html file inside index.js
    }),
    new NodePolyfillPlugin()
  ]
};
