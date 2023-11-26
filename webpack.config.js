const path = require("path");

module.exports = {
  mode: "development", // or 'production' for production mode
  entry: "./src/codebookTerminal.js", // Entry point of your package
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "bundle.js", // Output file name
    libraryTarget: "umd", // Output format (UMD allows your package to work in various environments)
    globalObject: "this", // Handling global object variations
    library: "codebook-terminal", // Name of your package exposed as a global variable
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // Use babel-loader to transpile JSX
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"], // CSS handling configuration
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // Allow importing .js and .jsx files without specifying the extension
  },
  externals: {
    react: "react", // Exclude React from the bundle if your package expects it to be provided by the consumer
    "react-dom": "react-dom", // Exclude React DOM as well
  },
};
