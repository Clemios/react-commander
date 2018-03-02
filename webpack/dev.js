const path = require('path');
const DEV_PORT = 8080;

module.exports = {
    entry: [
        path.resolve(__dirname, '..', 'app', 'index.js'),
    ],
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        publicPath: '/dist/',
        filename: 'bundle.js',
    },
    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            {
                test: /\.s(a|c)ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            }
        ],
    },
    // Toutes les options servant au webpack-dev-server. Toutes les
    // clefs sont dispos ici : https://webpack.js.org/configuration/dev-server/
    devServer: {
        compress: true,
        port: DEV_PORT,
    },

};