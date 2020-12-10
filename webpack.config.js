module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        loader: 'babel-loader',
        resolve: {
          extensions: ['.js', '.jsx'],
        },
      },
      {
        test: /\.tsx?$/i,
        exclude: /node_modules/,
        loader: 'ts-loader',
        resolve: {
          extensions: ['.ts', '.tsx'],
        },
      }],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};
