const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); //폴더 비우는 플러그인
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';

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
  entry: {
    app: path.join(__dirname, 'src', 'index.tsx'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'dist'),
    sourceMapFilename: '[name].js.map',
  },
  devtool: 'source-map',
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
        env: process.env.NODE_ENV === 'production' ? '' : '[DEV]',
      },
      minify:
        process.env.NODE_ENV === 'production'
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
