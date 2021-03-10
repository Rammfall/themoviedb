/* eslint-disable import/no-extraneous-dependencies */
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')

module.exports = (ctx) => {
  const production = ctx.env === 'production'
  const productionPlugins = production ? [cssnano] : []

  return {
    parser: false,
    map: false,
    plugins: [autoprefixer, ...productionPlugins]
  }
}
