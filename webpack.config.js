const path = require("path");
const fs = require("fs");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { extendDefaultPlugins } = require("svgo");

const environment = require("./config/env");

const templateFiles = fs
  .readdirSync(path.resolve(__dirname, "./"))
  .filter((file) => path.extname(file).toLowerCase() === ".html");

const htmlPluginEntries = templateFiles.map(
  (template) =>
    new HTMLWebpackPlugin({
      inject: true,
      hash: false,
      filename: template,
      template: path.resolve(__dirname, template),
    })
);

module.exports = {
  entry: {
    app: path.resolve(environment.paths.source, "index.js"),
  },
  output: {
    filename: "js/[name].js",
    path: environment.paths.output,
  },
  module: {
    rules: [
      {
        test: /\.((c|sa|sc)ss)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "fonts/[name].[hash:6].[ext]",
              publicPath: "../",
              limit: environment.limits.fonts,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
    new CleanWebpackPlugin({
      verbose: true,
      cleanOnceBeforeBuildPatterns: ["**/*", "!stats.json"],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "assets"),
          to: path.resolve(environment.paths.output, "assets"),
          toType: "dir",
          globOptions: {
            ignore: ["*.DS_Store", "Thumbs.db"],
          },
        },
      ],
    }),
  ].concat(htmlPluginEntries),
  target: "web",
};
