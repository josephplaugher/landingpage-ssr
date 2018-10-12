const path = require('path');
const Dotenv = require('dotenv-webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/client.mjs',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'main.js'
  },
  plugins: [
    new Dotenv(),
    new ExtractTextPlugin("styles.css"),
  ],
  module: {
    rules: [
      {
        test: /\.(js|mjs)$/,
        exclude: /node_modules/,//keeping react files around, but we're not going to use them for now
        use: ["babel-loader"]
      },
      {
        test:/\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: ['style-loader','css-loader','sass-loader'],
          use: ['css-loader','postcss-loader']
        })
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use:['file-loader']
      }
    ]
  },
  resolve: {
    alias: {
      Util: path.resolve(__dirname, 'src/client/Util/'),
      scss: path.resolve(__dirname, 'src/client/scss/'),
      ServerUtil: path.resolve(__dirname, 'src/server/ServerUtil/')
    }
  }
};