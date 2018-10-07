const path = require('path')

const SRC_DIR = path.join(__dirname, './src')
const OUTPUT_DIR = path.join(__dirname, './public')

module.exports = {
    entry: {
        main: path.join(SRC_DIR, './main')
    },
    mode: 'development',
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'ts-loader',
            include: [SRC_DIR],
            options: {
                instance: 'main'
            }
        }]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    output: {
        filename: '[name].js',
        path: OUTPUT_DIR
    }
}