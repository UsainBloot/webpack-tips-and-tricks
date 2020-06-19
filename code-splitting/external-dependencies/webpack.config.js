const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public/js')
  },
  externals: {
    lodash: '_' // Binds imports of 'lodash' to `window._` which is created by the CloudFlare CDN lodash script
  }
};
