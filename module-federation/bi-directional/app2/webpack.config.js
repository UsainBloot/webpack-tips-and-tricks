const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('./package.json').dependencies;
module.exports = {
  entry: './src/index',
  mode: 'development',
  output: {
    publicPath: 'http://localhost:3002/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react']
        }
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'app2',
      filename: 'remoteEntry.js',
      remotes: {
        app1: 'app1@http://localhost:3001/remoteEntry.js' // Instead of needing <script src="http://localhost:3001/remoteEntry.js" in app2's HTML
      },
      exposes: {
        './Button': './src/components/Button'
      },
      // sharing code based on the installed version, to allow for multiple vendors with different version
      shared: [
        {
          ...deps,
          react: {
            singleton: true,
            requiredVersion: deps.react
          },
          'react-dom': {
            singleton: true,
            requiredVersion: deps['react-dom']
          }
        }
      ]
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
};
