const webpack = require("webpack");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: "development",
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new CopyPlugin({ patterns: [{ from: "public" }] })],

  devServer: {
    static: path.join(__dirname, "dist"),
    port: 9002,
  },

  resolve: { extensions: [".js", ".ts"] },
};
