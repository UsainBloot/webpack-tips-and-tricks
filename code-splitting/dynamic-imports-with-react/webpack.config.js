const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js', // Used to name the dynamically imported modules
    path: path.resolve(__dirname, 'public/js'),
    publicPath: '/js/' // Used by bundles to the path for other bundles via network calls
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  externals: {
    react: 'React', // Binds imports of 'react' to `window.React` which is created by the CDN unpkg react script
    'react-dom': 'ReactDOM' // Binds imports of 'react-dom' to `window.ReactDOM` which is created by the CDN unpkg react script
  }
};
