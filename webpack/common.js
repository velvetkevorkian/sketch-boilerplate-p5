const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = function(title, slug, path) {
  return {
    entry: path + '/src/index.js',
    plugins: [
      new CleanWebpackPlugin([path + '/' + slug], {
        allowExternal: true
      }),
      new HtmlWebpackPlugin({
        title: title,
        template: path + '/index.html'
      })
    ],
    output: {
      filename: '[name].[contenthash].js',
      path: path + '/' + slug,
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    }
  }
}
