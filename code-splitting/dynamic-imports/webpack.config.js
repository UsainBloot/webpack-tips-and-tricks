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
  }
};
