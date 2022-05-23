const path = require('path');

module.exports = {
    entry: './src/index',
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader'
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: {
                    loader: 'html-loader'
                }
            },
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    devServer: {
        static: './dist',
        port: 8080,
        open: true
    }
}