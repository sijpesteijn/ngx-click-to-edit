import * as path from 'path';
import * as fs from 'fs';
import * as webpack from 'webpack';
import * as angularExternals from 'webpack-angular-externals';
import * as rxjsExternals from 'webpack-rxjs-externals';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

const pkg = JSON.parse(fs.readFileSync('./package.json').toString());

export default {
    devtool  : 'source-map',
    entry    : path.join(__dirname, 'demo', 'entry.ts'),
    output   : {
        path         : path.join(__dirname, 'standalone_demo'),
        publicPath   : './',
        filename     : '[name].js',
        libraryTarget: 'umd',
        library      : 'ngxClickToEdit'
    },
    module   : {
        rules  : [
            { test: /\.html$/, loader: 'html-loader' },
            {
                test: /\.css$/,
                use: ['to-string-loader', 'css-loader']
            },
            {
                test: /images\/.*\.(png|jpg|svg|gif)$/,
                loader: 'url-loader?limit=10000&name="[name]-[hash].[ext]"',
            },
            {
                test: /fonts\/.*\.(woff|woff2|eot|ttf|svg)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader?name="[name]-[hash].[ext]"'
            },
            {
                test   : /\.ts$/,
                loader : 'tslint-loader?emitErrors=false&failOnHint=false',
                exclude: /node_modules/,
                enforce: 'pre'
            }, {
                test   : /\.ts$/,
                loader : 'awesome-typescript-loader',
                exclude: /node_modules/
            }],
        loaders: [
        ]
    },
    resolve  : {
        extensions: ['.ts', '.js', '.css']
    },
    devServer: {
        port              : 8000,
        inline            : true,
        hot               : true,
        historyApiFallback: true
    },
    plugins  : [
        ...([]),
        new webpack.DefinePlugin({
            ENV: JSON.stringify('production')
        }),
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            path.join(__dirname, 'src')
        ),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'demo', 'index.ejs')
        })
    ]
};
