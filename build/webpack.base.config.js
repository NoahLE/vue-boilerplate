const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  mode: "development",
  entry: "./src/index",
  output: {
    filename: "[name].[hash].bundle.js",
    chunkFilename: "[name].[hash].bundle.js",
    path: path.resolve(__dirname, "../dist"),
  },
  target: "web",
  optimization: {
    moduleIds: "hashed",
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.m?js$/,
        loader: "babel-loader",
        exclude: /(node_modules|bower_components)/,
        options: {
          presets: ["@babel/preset-env"],
        },
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js",
    },
    extensions: [".vue", ".js", ".json", ".css"],
    modules: ["node_modules", path.resolve(__dirname, "src")],
    symlinks: false,
  },
  performance: {
    hints: false,
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    hot: true,
    port: 9000,
  },
  target: "web",
  stats: "errors-only",
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "ROFL",
      template: "src/index.html",
    }),
    new VueLoaderPlugin(),
  ],
};
