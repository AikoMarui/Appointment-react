const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js", // <- entrada explícita
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // <- corrigido para escapar corretamente
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            sourceType: "unambiguous", // <- CRÍTICO para evitar o erro!
          },
        },
      },
    ],
  },
};
