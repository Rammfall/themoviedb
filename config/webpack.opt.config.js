const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  optimization: {
    minimize: true
  },
  plugins: [new OptimizeCssAssetsPlugin()]
}
