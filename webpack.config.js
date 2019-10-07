const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: {
        'website-pages/landing-page/landing': './src/website-pages/landing-page/landing.js',
        'ui-kit/colors-type/colors-type': './src/ui-kit/colors-type/colors-type.js',
        'ui-kit/form-elements/form-elements': './src/ui-kit/form-elements/form-elements.js',
        'ui-kit/headers-footers/headers-footers': './src/ui-kit/headers-footers/headers-footers.js',
        'ui-kit/cards/cards': './src/ui-kit/cards/cards.js'
    },
    output: {
        path: path.resolve(__dirname, 'public/'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: '/node_modules/'
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.pug$/,
                loader:  "pug-loader",
                  options: {
                      name: "[name].pug"       
                  }
            },
            {
                test: /\.(gif|png|jpeg|svg|jpg)$/,
                  loader:  "file-loader",
                  options: {
                      name: "[name].[ext]"       
                  }
              },
              {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                  loader:  "file-loader",
                  options: {
                      name: "[name].[ext]"       
                  }
              }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `[name].css`,
        }),
        new HTMLWebpackPlugin({
            hash: false,
            template: `./src/website-pages/landing-page/landing.pug`,
           }),
        new CopyWebpackPlugin([
            { from: './src/assets/img', to: './assets/img' },
            { from: './src/assets/fonts', to: './assets/fonts' },
            { from: './src/plugins', to: './assets/plugins' },
          ]),
    ]
}