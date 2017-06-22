const path = require('path')

module.exports = {
  entry: './src/main',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  }
}
