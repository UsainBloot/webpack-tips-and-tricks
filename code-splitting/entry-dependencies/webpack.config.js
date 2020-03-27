const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    index: { import: './src/index.js', dependOn: 'shared' },
    another: { import: './src/another-module.js', dependOn: 'shared' },
    // Array of shared dependencies, referenced by their require / import name
    shared: ['lodash'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
