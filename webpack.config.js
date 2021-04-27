const path = require("path");

module.exports = {
  entry: "./client/index.js",
  output: { filename: "bundle.js", path: path.resolve(__dirname, "build") },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(scss|css)$/,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
          "postcss-loader",
        ],
      },
    ],
  },
  devServer: {
    publicPath: "/build",
    proxy: {
      "/api": {
        target: "http://localhost:3000",
      },
    },
    open: true,
  },
  plugins: [],
};
