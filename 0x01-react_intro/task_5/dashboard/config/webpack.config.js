const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'inline-source-map', // Inline source maps for easier debugging
  devServer: {
    static: path.resolve(__dirname, 'public'), // Serve from the public directory
    hot: true, // Enable hot module replacement
    open: true, // Automatically open the browser
  },
  module: {
    rules: [
      {
        test: /\.css$/i, // Handle CSS files
        use: ['style-loader', 'css-loader'], // Use style and CSS loaders
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/, // Handle JS and JSX files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Transpile JS/JSX files
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'] // Use the React preset
          }
        }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Use this HTML file as a template
      filename: './index.html'
    }),
  ],
};
