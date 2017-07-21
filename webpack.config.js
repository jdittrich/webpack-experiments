var path = require( 'path' );

module.exports = {
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
      contentBase: './dist'
  }
};
