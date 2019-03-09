var webpack = require('webpack');

module.exports = (env, argv) => ({
    entry: {
        positions: __dirname + "/src/entry-point/positions.js",
        pdf: __dirname + "/src/entry-point/pdf.js",
    },
    output: {
        path: __dirname ,
        filename: "[name].gen.min.js",
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
            },
            {
                test: /\.css/,
                use: ["style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            config: {path: __dirname, ctx: {env: argv.mode}},
                            sourceMap: argv.mode !== "production",
                        },
                    }]
            },
        ]
    }
});