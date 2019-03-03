var webpack = require('webpack');

module.exports = (env, argv) => ({
    entry: "./src/index.js",
    output: {
        path: __dirname + '/dist',
        filename: 'index.js',
        library: 'ReactContainerBoilerplate',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            config: {path: __dirname, ctx: {env: argv.mode}},
                            sourceMap: argv.mode !== "production",
                        },
                    },
                    "sass-loader"
                ]
            }
        ]
    }
});