const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); //폴더 비우는 플러그인
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const PROJECT_ROOT = path.resolve(__dirname);
const PUBLIC_INDEX = path.resolve(PROJECT_ROOT, 'public', 'index.html');
const SRC_PATH = path.resolve(__dirname, 'src');
const BUILD_PATH = path.resolve(PROJECT_ROOT, 'dist');

const mode = process.env.NODE_ENV || 'development';
const isEnvDevelopment = mode === 'development';
const isEnvProduction = mode === 'production';
module.exports = {
  mode,
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  entry: path.resolve(SRC_PATH, 'index.tsx'),
  output: {
    path: BUILD_PATH,
    filename: isEnvDevelopment
      ? 'js/[name].[contenthash:8].js'
      : 'js/bundle.js',
  },
  devtool: 'source-map',
  cache: {
    type: isEnvDevelopment ? 'memory' : 'filesystem',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },

      {
        test: /\.(png|jpg|gif|jpeg|svg)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: [/\.js$/, /\.ts?$/, /\.jsx?$/, /\.tsx?$/],
        enforce: 'pre',
        exclude: /node_modules/,
        use: ['source-map-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              fallback: 'file-loader',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
      templateParameters: {
        env: isEnvProduction ? '' : '[DEV]',
      },
      minify: isEnvProduction
        ? {
            collapseWhitespace: true,
            removeComments: true,
          }
        : false,
    }),
    new CleanWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin(),
  ],
};
