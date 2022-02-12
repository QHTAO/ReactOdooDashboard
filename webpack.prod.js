const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "dashboard.[name].js",
    path: path.resolve(__dirname, "./dist"),
  },
  plugins: [new CleanWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "initial", // 全域配置
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: "initial",
          name: "vendors",
          enforce: true,
          priority: 10, // 預設為 0，必須大於預設 cacheGroups
        },
      },
    },
  },
});
