const path = require("path");

module.exports = {
  mode: "production",

  entry: ["./app-b/index.js"],
  output: {
    library: "AppB",
    libraryTarget: "umd",

    filename: "index.js",
    path: path.resolve(__dirname, "app-b", "dist"),
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
