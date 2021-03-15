const path = require("path");

module.exports = {
  mode: "production",

  entry: ["./main-app/index.js"],
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "main-app", "dist"),
  },

  externals: {
    AppA: "AppA",
    AppB: "AppB",

    react: "React",
    "react-dom": "ReactDOM",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
    ],
  },
};
