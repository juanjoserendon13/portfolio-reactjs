const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { resolve } = require('path')

const cssModules = 'modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]'

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx']
  },

  entry: [resolve(__dirname, './src/index.jsx')],
  output: {
    // filename: PROD ? 'app.min.js' : 'app.js',
    filename: 'app.js',
    path: resolve(__dirname, 'build/'),
    // publicPath: resolve(__dirname, 'build/')
    publicPath: '/'

  },

  module: {
    loaders: [
      {test: /(\.js|jsx)$/, exclude: /node_modules/, loaders: ['babel-loader'] },
      {test: /\.css$/, loaders: `style-loader!css-loader?${cssModules}`},
      {test: /\.(jpe?g|png|gif|svg)$/i,
        include: resolve(__dirname, 'src/'),
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'img/'
              // publicPath: 'img/'
            }
          }
        ]
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        // exclude: /node_modules/,
        // include: resolve(__dirname, 'src/fonts'),
        // loader: 'url-loader?limit=10000'
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]'
            }
          }
        ]
      }

      // {test: /\.(eot|ttf|woff|woff2)$/,
      //   include: resolve(__dirname, 'src/fonts/'),
      //   use: [
      //     {
      //       // loader: 'url-loader',
      //       loader: 'file-loader',
      //       options: {
      //         limit: 8192
      //       }
      //     }
      //   ]
      // }

    ]
  },

  devServer: {
    host: '0.0.0.0',
    port: 8080,
    contentBase: resolve(__dirname, 'build/'),
    inline: true
  },

  plugins: [
    new HtmlWebpackPlugin({template: './src/assets/index.html'}),
    new ExtractTextPlugin('style.css', { allChunks: true })
  ]
}
