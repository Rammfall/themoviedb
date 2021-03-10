const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const DotEnvPlugin = require('dotenv-webpack')

module.exports = (env, { mode }) => {
  const production = mode === 'production'
  const MiniCssLoader = {
    loader: MiniCssExtractPlugin.loader,
    options: {
      publicPath: './public/css'
    }
  }

  return {
    entry: './src/index.js',
    output: {
      filename: '[name][fullhash].js',
      path: resolve(__dirname, 'dist')
    },
    mode: production ? 'production' : 'development',
    devtool: !production && 'inline-source-map',
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
            !production ? 'style-loader' : MiniCssLoader,
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
                name: 'images/[fullhash]-[name].[ext]'
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
                name: 'fonts/[fullhash]-[name].[ext]'
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: 'index.html',
        minify: production
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[fullhash].css',
        chunkFilename: '[id].[fullhash].css'
      }),
      new CleanWebpackPlugin(),
      new DotEnvPlugin({
        systemvars: true
      })
    ],
    resolve: {
      alias: {
        Helpers: resolve(__dirname, 'src/helpers'),
        Config: resolve(__dirname, 'src/config'),
        Store: resolve(__dirname, 'src/store'),
        Views: resolve(__dirname, 'src/views'),
        Utils: resolve(__dirname, 'src/utils'),
        TestUtils: resolve(__dirname, 'src/testUtils'),
        Api: resolve(__dirname, 'src/api')
      }
    },
    devServer: {
      proxy: {
        '/api': {
          target: 'http://api.themoviedb.org/3/',
          pathRewrite: { '^/api': '' }
        },
        secure: false
      },
      hot: true,
      port: 4000,
      historyApiFallback: true
    }
  }
}
