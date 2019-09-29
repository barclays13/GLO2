const path = require('path');

module.exports = {
    entry: {
        main: './src/index.js' //точка входа
    },
    output: {               //точка выхода
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        publicPath: '/dist'
    }
};