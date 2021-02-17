const vueLoaderPlugin = require('vue-loader/lib/plugin'); //to access built-in plugins
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/main.js',
    module: {
        rules: [
            {test: /\.vue$/, use: 'vue-loader'},
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ],
    },
    plugins: [
        new vueLoaderPlugin(),
        new CopyPlugin({
            patterns: [
                { from: "./src/*.html", to: "[name].[ext]" },
            ],
        })
    ],
};
