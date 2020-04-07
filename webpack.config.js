const webpack = require('webpack');

const path = require('path');

const autoprefixer = require('autoprefixer');

const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'development',
    entry: [
        './src/assets/scss/style.scss',
        './src/main.js',
    ],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'assets/js/bundle.min.js'
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        port: 4000,
        open: true,
        historyApiFallback: true
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.join(__dirname, './src')
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            Popper: 'popper.js',
        }),
        new VueLoaderPlugin()
    ]
};