const parts = require('./webpack.parts');

module.exports = {
  entry: {
    app: `${parts.PATH.app}/app.js`,
  },
  output: {
    path: parts.PATH.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
  // optimization: {
  //   runtimeChunk: 'single',
  //   splitChunk: {
  //     // chunk最小值，因为我们locale太小了就随便写了
  //     minSize: 1,
  //     maxSize: 0,
  //     maxAsyncRequests: 5,
  //     minInitialRequest: 3,
  //     cacheGroup: {
  //       ...locales
  //     },
  //   },
  // },
};
