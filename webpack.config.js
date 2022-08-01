// remote/webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");
const { dependencies } = require("./package.json");

module.exports = {
    entry: "./src/index",
    mode: "development",
    devServer: {
        static: {
            directory: path.join(__dirname, "public"),
        },
        port: 4000,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env", "@babel/preset-react"],
                        },
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
                exclude: /node_modules/,
                use: ['file-loader?name=[name].[ext]'] // ?name=[name].[ext] is only necessary to preserve the original file name
            }
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "Remote",
            filename: "moduleEntry.js",
            exposes: {
                "./App": "./src/App",
            },
            shared: {
                ...dependencies,
                react: {
                    singleton: true,
                    requiredVersion: dependencies["react"],
                },
                "react-dom": {
                    singleton: true,
                    requiredVersion: dependencies["react-dom"],
                },
            },
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
    resolve: {
        extensions: [".js", ".jsx"],
    },
    target: "web",
};