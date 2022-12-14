const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
require('dotenv').config({ path: './.env' })

const deps = require("./package.json").dependencies;
module.exports = {
  output: {
    //https://stackoverflow.com/questions/69632866/uncaught-chunkloaderror-loading-chunk-module-federation-webpack-5-while-loadi
    publicPath: "auto" //process.env.PUBLIC_PATH || "/" //"http://localhost:3000/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 3000,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "mfeProducts",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./Products" : "./src/Components/Products.jsx",
        "./ProductItem" : "./src/Components/ProductItem.jsx",
        "./ProductDetail" : "./src/Components/ProductDetail.jsx",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};
