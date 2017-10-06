const webpack = require('webpack')
const path = require('path');

const config = {
    context: __dirname + "/app",
    entry: __dirname + "/src/EtherumQRCode.js",
    output: {
        path: __dirname + "/lib",
        filename: "index.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    }
}

module.exports = config