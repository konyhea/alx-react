const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // Set development mode
  entry: './src/index.js', // Entry point for your app
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Bundle file name
  },
  devtool: 'inline-source-map', // Inline source maps for easier debugging
  devServer: {
    static: path.resolve(__dirname, 'public'), // Serve from the dist directory
    hot: true, // Enable hot module replacement
    open: true, // Automatically open the browser
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Handle CSS files
        use: ['style-loader', 'css-loader'], // Use style and CSS loaders
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Handle image files
        type: 'asset', // Built-in asset module for images
        use: [
          {
            loader: 'image-webpack-loader', // Optimize images
            options: {
              disable: true, // Disable during development
            },
          },
        ],
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
