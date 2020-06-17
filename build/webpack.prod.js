const path = require('path');

module.exports = {
  entry: 'src/packages/index.js',
  output: {
    path: path.resolve(__dirname, './dist'), 
    filename: 'page-table.js',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  optimization: {
    minimize: true
  }
};