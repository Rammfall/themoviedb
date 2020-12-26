const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve, join } = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = ({ environment }) => {
  const development = environment === 'development'
  const MiniCssLoader = {
    loader: MiniCssExtractPlugin.loader,
    options: {
      publicPath: '../public/css'
    }
  }

  return {
    entry: './src/index.js',
    output: {
      filename: '[name][hash].js',
      path: resolve(__dirname, '../dist')
    },
    mode: development,
    devtool: development && 'inline-source-maps',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.s?css$/,
          use: [
            development ? 'style-loader' : MiniCssLoader,
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.(png|jp(e*)g|svg|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8000, // Convert images < 8kb to base64 strings
                name: 'images/[hash]-[name].[ext]'
              }
            }
          ]
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'fonts/[hash]-[name].[ext]'
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: './index.html',
        minify: !development
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[hash].css',
        chunkFilename: '[id].[hash].css'
      })
    ],
    resolve: {
      alias: {
        Components: resolve(__dirname, '../src/components'),
        Helpers: resolve(__dirname, '../src/helpers'),
        Store: resolve(__dirname, '../src/store')
      }
    },
    devServer: {
      proxy: {
        '/api': {
          target: 'http://api.themoviedb.org/3/',
          pathRewrite: { '^/api': '' }
        },
        secure: false
      }
    }
  }
}
