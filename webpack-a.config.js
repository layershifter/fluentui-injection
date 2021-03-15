const path = require("path");

module.exports = {
  mode: "production",

  entry: ["./app-a/index.js"],
  output: {
    library: "AppA",
    libraryTarget: "umd",

    filename: "index.js",
    path: path.resolve(__dirname, "app-a", "dist"),
  },

  externals: { react: "React", "react-dom": "ReactDOM" },
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
