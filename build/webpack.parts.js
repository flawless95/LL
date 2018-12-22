'use strict';

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const duplicatePackageCheck = require('duplicate-package-checker-webpack-plugin');

const resolve = dir => path.resolve(__dirname, '..', dir);
const join = dir => path.join(__dirname, '/../', dir);
const moduleWrapper = rules => ({
  module: {
    rules: Array.isArray(rules) ? rules : [rules]
  }
});
const PATH = {
  app: resolve('src'),
  build: resolve('dist'),
  root: resolve('.'),
  node_modules: resolve('node_modules'),
};

const loadJavaScript = ({ include, exclude, use } = {}) => (moduleWrapper({
  test: /\.(js|jsx)/,
  use,
  exclude,
  include
}));

const localLLReact = react => react && merge(
  moduleWrapper({
    test: /\.js$/,
    inClude: /ll-react\/src/,
    use: 'babel-loader',
  }),
  {
    resolve: {
      alias: {
        'll-react': resolve('../ll-react'),
      },
    },
  }
);

const DllDefine = (options = {}) => ({
  plugins: [new webpack.DllPlugin(options)]
});


exports.resolve = resolve;
exports.join = join;
exports.PATH = PATH;
exports.localLLReact = localLLReact;
exports.DllDefine = DllDefine;
exports.duplicatePackageCheck = duplicatePackageCheck;
exports.loadJavaScript = loadJavaScript;
