const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html'
    })
  ],
  resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx'] },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: 'defaults',
                  debug: true,
                  useBuiltIns: 'usage',
                  corejs: 3
                }
              ],
              ['@babel/preset-react', { runtime: 'automatic' }]
            ]
          }
        }
      },
      {
        test: /\.(c)ss$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(ts)x?$/,
        exclude: /node_modules|\.d\.ts$/, // this line as well
        use: {
          loader: 'ts-loader',
          options: {
            compilerOptions: {
              noEmit: false // this option will solve the issue
            }
          }
        }
      }
    ]
  },
  devServer: {
    hot: true,
    port: 3000,
    open: true,
    historyApiFallback: true
  }
};
