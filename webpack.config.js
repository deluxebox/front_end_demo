const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');
const Webpack = require('webpack');
const { join } = require('path');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        hot: true,
        inline: true,
        port: 8000
    },
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.jsx?$/, exclude: /node_modules/, 
             use: [{loader: 'babel-loader', options: {cacheDirectory: true, presets: ['env', 'react', 'stage-2']}}]}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({title: 'PTX-PRO', template: path.resolve(__dirname, './resource/index.html')}),
        new CleanWebpackPlugin(),
        new Webpack.HotModuleReplacementPlugin(),
        // new UglifyWebpackPlugin()
    ]
}