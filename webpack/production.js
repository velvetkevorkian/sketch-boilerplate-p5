const merge = require('webpack-merge')
const common = require('./common.js')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = function(title, slug, path) {
  return merge(common(title, slug, path), {
    mode: 'production',
    resolve: {
      alias: {
        p5: 'p5/lib/p5.min.js'
      }
    },
    optimization: {
      minimizer: [
        new OptimizeCSSAssetsPlugin(),
        new TerserPlugin()
      ]
    },
    plugins: [
      new MiniCSSExtractPlugin({
        filename: '[name].[contenthash].css'
      })
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCSSExtractPlugin.loader
            },
            'css-loader'
          ]
        }
      ]
    }
  })
}
