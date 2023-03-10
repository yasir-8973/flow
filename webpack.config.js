const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {    
    entry: path.join(__dirname, "src", "index.tsx"),
    mode: process.env.NODE_ENV || "development",
    devServer: {
        port: 3000
    },
    output: { path: path.join(__dirname, "build"), clean: true },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ["ts-loader"],
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader","sass-loader"],
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ["file-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
            filename: './index.html',
            favicon:  "./public/favicon.ico",
            manifest: "./public/manifest.json"
        }),
    ],
};