var path = require( 'path' );
var webpack = require('webpack');

module.exports = {
    plugins: [
      new webpack.HotModuleReplacementPlugin()
  ],
  entry: {
    ctrl: './src/banner_ctrl.js',
    var:  './src/banner_var.js',
  },
  output: {
    filename: 'banner_[name].js',
    path: path.resolve( __dirname, 'dist' )
  },
  module: {
    rules: [
        {
            test: /\.html$/,
            use: 'html-loader'
        },
        {
            test: /\.css$/,
            use: [
              { loader: 'style-loader' },
              { loader: 'css-loader' }
            ]
        },
        {
            test: /\.handlebars$/,
            use: [
              { loader: 'handlebars-loader' }
            ]
        }
    ]
  },
  devServer: {
      hot: true,
      contentBase: './dist'
  }
};
