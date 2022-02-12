const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./dist"),
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/template.html",
      chunks: ["sales"],
    }),
    new HtmlWebpackPlugin({
      filename: "purchase.html",
      template: "src/template.html",
      chunks: ["purchase"],
    }),
    new HtmlWebpackPlugin({
      filename: "inventory.html",
      template: "src/template.html",
      chunks: ["inventory"],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", //3. Inject styles into DOM
          "css-loader", //2. Turns css into commonjs
          "sass-loader", //1. Turns sass into css
        ],
      },
    ],
  },
  devServer: {
    compress: true,
    port: 9000,
  },
});
