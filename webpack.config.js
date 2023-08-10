const Path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {

  return {
    mode: argv.mode,
    entry: {
      main: {
        import: "./src/main.js",
      },
    },

    output: {
      path: Path.resolve(__dirname, "public" ),
      clean: true,
      publicPath: '/',
    },

    // watch: true,
    watchOptions: {
      aggregateTimeout: 1200,
      poll: 750,
      ignored: "**/node_modules",
    },

    module: {
      rules: [
        // css
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
        // scss
        {
          test: /\.s(a|c)ss$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
      ],
    },

    plugins: [
      new MiniCssExtractPlugin()
    ],
  };
};