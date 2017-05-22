const Config = require('./webpack.base.config')
const Webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const Dashboard = require('webpack-dashboard')
const DashboardPlugin = require('webpack-dashboard/plugin')
const dashboard = new Dashboard()

Config.entry.app.unshift('webpack-dev-server/client?http://localhost:8080/', 'webpack/hot/dev-server')
Config.output.filename = '[name].[hash:7].js'
Config.output.chunkFilename = '[name].[hash:7].js'
Config.module.rules.forEach((loader) => {
  if (loader.use[0].loader === 'url') {
    loader.use[0].options.name = '[name].[hash:7].[ext]'
  }
})

Config.output.publicPath = '/'

Config.plugins = (Config.plugins || []).concat([
  new ExtractTextWebpackPlugin({
    filename: '[name].[hash:7].css'
  }),
  new Webpack.HotModuleReplacementPlugin(),
  new DashboardPlugin(dashboard.setData),
  new Webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"dev"'
    }
  })
])

Config.devtool = 'source-map'

const compiler = Webpack(Config)

const server = new WebpackDevServer(compiler, {
  historyApiFallback: {
    index: '/app.html'
  },
  hot: true,
  inline: true,
  quiet: true,
  proxy: {
    '/api': {
      changeOrigin: true,
      host: '172.16.0.186:8000',
      target: 'http://172.16.0.186:8000',
      secure: false,
      pathRewrite: { '^/api': '' }
    }
  }
})

server.listen(8080, (err) => {
  if (err) {
    console.log(err)
  }
  console.log('listen at localhost:8080')
})
