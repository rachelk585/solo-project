const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html'
    })
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'build'),
      publicPath: '/',
    },
    proxy: {
      '/plants': 'http://localhost:3000'
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}