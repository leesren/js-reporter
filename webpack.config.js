const path = require('path');
var webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
var config = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'wpkReporter',
    libraryTarget: 'umd',
  },
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devtool = 'inline-source-map';
  } else if (argv.mode === 'none') {
    config.output.path = path.resolve(__dirname, 'dist');
    config.output.libraryTarget = 'umd';
    config.output.globalObject = "typeof self !== 'undefined' ? self : this";
    config.optimization = {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          cache: true, // 开启缓存
          parallel: true, // 支持多进程
          sourceMap: false,
        }),
      ],
    };
  }
  return config;
};
