const merge = require('webpack-merge')
const common = require('./common.js')

module.exports = function(title, slug, path) {
  return merge(common(title, slug, path), {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      contentBase: path + '/' + slug,
      disableHostCheck: true
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        }
      ]
    }
  })
}
