const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: [
      {
        directory: path.join(__dirname, 'dist'),
        watch: true,
      },
      {
        directory: path.join(__dirname, 'src', 'public'),
        watch: true,
      },
    ],
    open: true,
    compress: true,
    port: 9000,
    // https: true, // Enable HTTPS
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
});
