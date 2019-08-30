const path = require('path'); // load in node module

// npm run dev-server
// for testing run - npm test -- --watch
// Run $ node webpack.config.js to get the whole path on your local machine
// node's path.join combines the paths
console.log(path.join(__dirname, 'public')); 

// entry Point and output
module.exports = {
    entry: './src/app.js',
    // entry: './src/playground/hoc.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    // loader
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};



