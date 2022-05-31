const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: [
    "./src/front/js/index.js",
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(css|scss)$/,
        use: [{
          loader: "style-loader", // creates style nodes from JS strings
        }, {
          loader: "css-loader", // translates CSS into CommonJS
        }, {
          loader: "sass-loader", // compiles Sass to CSS
        }],
      }, // css only files
      {
        test: /\.(png|svg|jpg|gif|jpeg|webp)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 8192,
          },
        },
      }, // for images
      { test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/, use: ["file-loader"] }, // for fonts
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: "public/favicon.ico",
      template: "public/template.html",
    }),
    new Dotenv({ safe: true, systemvars: true }),
  ],
};
