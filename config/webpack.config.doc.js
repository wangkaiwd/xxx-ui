const path = require('path');
const base = require('./webpack.config');
const absPath = dir => path.resolve(__dirname, `${dir}`);
const merge = require('webpack-merge');
module.exports = (env) => merge(base(env), {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  output: {
    path: absPath('../build')
  }
});
