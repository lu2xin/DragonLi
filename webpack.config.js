const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const { DefinePlugin } = require('webpack');

/**
 * @type {import('webpack').Configuration}
 * @see https://webpack.docschina.org/configuration/
 */
const mainConfig = {
    mode: 'development',
    target: 'electron-main',
    devtool: 'inline-source-map',
    entry: {
        index: './packages/main/src/index.ts'
    },
    output: {
        path: path.resolve(__dirname, 'build/main'),
        filename: '[name].cjs',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [
        new DefinePlugin({
            'import.meta.env.MODE': JSON.stringify('development'),
            'import.meta.env.VITE_DEV_SERVER_URL': JSON.stringify('http://localhost:8080/')
        }),
    ],
    resolve: {
        extensions: ['.ts', '.js']
    }
}

/**
 * @type {import('webpack').Configuration}
 * @see https://webpack.docschina.org/configuration/
 */
const rendererConfig = {
    mode: 'development',
    target: ['web', 'electron-renderer'],
    devtool: 'cheap-module-source-map',
    entry: {
        index: './packages/renderer/src/index.ts'
    },
    output: {
        path: path.resolve(__dirname, 'build/renderer'),
        filename: '[name].js',
    },
    devServer: {

    },
    module: {
        rules: [
            {
                test: /\.(ts|js)$/,
                loader: 'esbuild-loader',
                exclude: /node_modules/,
                options: {
                    loader: 'ts',
                    target: 'esnext'
                }
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'packages/renderer/index.html')
        }),
        new VueLoaderPlugin(),
        new DefinePlugin({
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: true,
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'packages/renderer/src'),
        },
        extensions: ['.ts', '.js', '.vue']
    },
}

exports.mainConfig = mainConfig
exports.rendererConfig = rendererConfig

// module.exports = [mainConfig, rendererConfig]