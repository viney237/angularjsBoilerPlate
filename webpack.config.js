const path = require('path');

 const config = {
    entry: './src/index.js',
    output: {
        path: "/dist",
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: 'style-loader!css-loader'
            },
            {
                test: /\.js$/,
                use: 'babel-loader'
            }
        ]
    }
};

module.exports = config;