const Webpack = require('webpack')
const ProgressPlugin = require('webpack/lib/ProgressPlugin')
const Config = require('./webpack.base.config')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

Config.output.publicPath = '/'

Config.plugins = (Config.plugins || []).concat([
  new ExtractTextWebpackPlugin({
    filename: 'style/[name].[hash:7].css'
  }),
  new Webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }),
  new Webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })
])

var compiler = Webpack(Config)

compiler.apply(new ProgressPlugin((percentage, msg) => {
  console.log((percentage * 100).toFixed(2) + '%', msg)
}))

compiler.run((err, stats) => {
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }))
})
