const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: {
        app: [
            "@babel/polyfill",
            path.resolve(__dirname, "src/generate-web.js"),
        ],
    },
    devtool: "cheap-source-map",
    output: {
        pathinfo: true,
        filename: "bundle.js",
    },
    plugins: [
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || "true")),
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    "babel-loader",
                ],
                include: path.join(__dirname, "src"),
            },
        ],
    },
    node: {
        fs: "empty",
        net: "empty",
        tls: "empty",
    },
}
