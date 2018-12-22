const merge = require('webpack-merge');
const common = require('./webpack.base');
const parts = require('./webpack.parts');

const local = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: parts.join('dist'),
    compress: true,
    port: 8686
  }
};

const mergeObj = merge(common, local);

console.log(mergeObj, '=============');

module.exports = mergeObj;
