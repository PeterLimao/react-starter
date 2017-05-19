const Path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const Webpack = require('webpack')

module.exports = {
  entry: {
    app: ['./src/index.js'],
    vendor: [
      'react',
      'react-dom',
      'axios'
    ]
  },
  output: {
    path: Path.join(__dirname, '../dist'),
    filename: 'js/[name].[hash:7].js',
    chunkFilename: 'js/[name].[hash:7].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel'
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
        use: [
          {
            loader: 'url',
            options: {
              query: {
                limit: 10000,
                name: 'img/[name].[hash:7].[ext]'
              }
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style',
          use: 'css'
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style',
          use: [
            'css', 'less'
          ]
        })
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        use: [
          {
            loader: 'url',
            options: {
              query: {
                limit: 10000,
                name: 'font/[name].[hash:7].[ext]'
              }
            }
          }
        ]
      }
    ]
  },
  resolveLoader: {
    moduleExtensions: ['-loader']
  },
  resolve: {
    extensions: ['.js', '.css', '.jpg', '.png', '.less', '.svg'],
    alias: {
      '@': Path.join(__dirname, '../src')
    }
  },
  plugins: [
    new Webpack.optimize.CommonsChunkPlugin({
      names: ['vendor'],
      minChunks: 2
    }),
    new HtmlWebpackPlugin({
      filename: 'app.html',
      template: 'src/app.tpl',
      chunks: ['vendor', 'app'],
      inject: true
    })
  ]
}
