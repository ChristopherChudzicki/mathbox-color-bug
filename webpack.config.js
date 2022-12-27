const path = require("path")

const config = {
  entry: './src/index.js',
  output: {
    filename: 'axis.js',
    path: path.resolve(__dirname, 'webpack_output'),
  },
  mode: "production",
  devtool: false,
  optimization: {
      minimize: false,
      usedExports: true,
  }
};

module.exports = config