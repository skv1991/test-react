module.exports = {
  module: {
    rules: [{
      test: /\.jsx?$/i,
      exclude: /node_modules/,
      loader: "babel-loader",
      resolve: {
        extensions: ['.js', '.jsx']
      }
    }]
  }
};