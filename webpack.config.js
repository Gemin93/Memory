const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  entry: './src/script.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.[contenthash].js"
  },
  module: {
    rules: [{
      // это правило указывает на то, что бы webpack прогнал все файлы с расширением js через babel
      test: /\.js$/,
      use: 'babel-loader',
      exclude: /node_modules/
    },
    {
      //css-loader обрабатывает файлы стилей и кладёт результат в js в виде строк
      //style-loader переносит полученые стили в тег style
      test: /\.css$/,
      use: ['style-loader','css-loader']
    },{
      test: /\.svg$/,
      type: "asset/resource"
    },{
        test: /\.(ts|tsx)$/,
        type: "ts-loader",
        exclude: /node_modules/
      }]
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  plugins: [new HtmlWebpackPlugin({
    template: "./src/index.html"
  })],
  devServer: {
    open: true
  }
}