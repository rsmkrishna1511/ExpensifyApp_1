const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = (env) => {
    const isProduction = env === 'production';
    const extractCSS = new ExtractTextPlugin('style.css');

    return {
        entry: './src/app.js',
        //entry: './src/playground/redux-01.js',
        //entry : './src/playground/redux-expensify.js',
        output: {
            path: path.resolve(__dirname,'public'),
            filename: 'bundle.js'
        },
    
        module:{
            rules:[
                {
                    loader: 'babel-loader',
                    test:/\.js$/,
                    exclude:/node_modules/
                },
                {
                    test: /\.s?css$/,
                    use: extractCSS.extract([
                        //'style-loader',
                        //'css-loader',
                        //'sass-loader'
                        {
                            loader : 'css-loader',
                            options : {
                                sourceMap : true
                            }
                        },
                        {
                            loader : 'sass-loader',
                            options : {
                                sourceMap : true
                            }
                        }
                      ])
                }
            ]
        },
        plugins: [
            extractCSS
        ],
        //devtool: isProduction ? 'source-map':'cheap-module-eval-source-map',
        devtool: isProduction ? 'source-map':'inline-source-map',

        devServer : {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    };
};

//module.exports = 