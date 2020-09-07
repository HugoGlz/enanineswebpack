const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        index: path.join(__dirname, 'src', 'js', 'index.js'), /*  ./src/js/index.js */
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-env'] //.babelrc
                }
            }
        ]
    }
}