const path = require('path');
const merge = require('webpack-merge');
const parts = require('./webpack.parts');

const entry = {
  vendor: [
    'react',
    'lodash'
  ]
};

const commonConfig = merge({
  mode: 'development',
  entry,
  output: {
    path: parts.resolve('tmp/dll'),
    filename: '[name].dll.js',
    library: 'name'
  }
});

const dll = merge(
  commonConfig,
  parts.DllDefine({
    context: parts.resolve('.'),
    name: '[name]',
    path: path.join(parts.resolve('tmp/dll'), '[name]-manifest.json')
  }),
  parts.duplicatePackageCheck()
);

module.exports = dll;
