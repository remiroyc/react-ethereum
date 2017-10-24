const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: "./src/EthereumQRCode",
    output: {
        path: path.join(__dirname, 'lib'),
        filename: "bundle.js",
        libraryTarget: "commonjs2"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /(node_modules|bower_components|build)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    externals: {
        'react': 'commonjs react' // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
    }
}