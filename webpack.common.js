const path = require("path");

module.exports = {
  entry: {
    sales: "./src/sales.js",
    purchase: "./src/purchase.js",
    inventory: "./src/inventory.js",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env", // 将ES6语法转成ES5
                {
                  useBuiltIns: "usage", // 低版本浏览器中只补充项目中使用到的ES6语法
                },
              ],
              "@babel/preset-react",
            ],
          },
        },
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs",
          },
        },
      },
    ],
  },
};
