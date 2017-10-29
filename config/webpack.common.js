const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
        ]
    },
    resolve: {
        extensions: [ '.js', '.jsx' ]
    },
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js',
    }
};