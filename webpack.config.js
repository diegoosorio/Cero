const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 4000
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
              test: /\.css$/,
              use: ['style-loader', 'css-loader'],
            },  
            {
              test: /\.(jpg|png|gif|svg)$/,
              use: {
                loader: 'url-loader',
                options: {
                limit: 10000,
                fallback: 'file-loader',
                name: 'images/[name].[hash].[ext]',
                }
              }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
    ]
};