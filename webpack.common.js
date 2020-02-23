const StylelintPlugin = require('stylelint-webpack-plugin')

module.exports = {
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // No third loader as it is added while merging later.
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                // Used for linting JS.
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            },
            {
                test: /\.woff2?$/,
                loader: 'file-loader',
                options: {
                    name: 'static/fonts/[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        // Used for linting SCSS.
        new StylelintPlugin({
            syntax: 'scss'
        })
    ]
}
