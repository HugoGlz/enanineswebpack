const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        index: path.join(__dirname, 'src', 'js', 'index.js'), /*  ./src/js/index.js */
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },

    devServer: {
        port: 3000,
        open: true,
        hot: true
    },

    module: {
        rules: [
            {
                test: /.js|jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-env','@babel/preset-react'], //.babelrc,
                    plugins: ['@babel/plugin-transform-runtime']
                }
            }
        ]
    },

    plugins: [
        new HTMLWebpackPlugin({
            title: "Enanos APP",
            template: path.join(__dirname, 'src', 'index.html')
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]

}