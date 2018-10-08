const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/client.mjs',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'main.js'
  },
  plugins: [
    new Dotenv()
  ],
  module: {
    rules: [
      {
        test: /\.(js|mjs)$/,
        exclude: /node_modules/,//keeping react files around, but we're not going to use them for now
        use: {
          loader: "babel-loader"
        }
      },
      {
        test:/\.(css|scss)$/,
        use:['style-loader','css-loader','sass-loader']
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
      css: path.resolve(__dirname, 'src/client/css/')
    }
  }
};