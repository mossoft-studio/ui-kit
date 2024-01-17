const path = require('path')


module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd',
        library: 'mossoft',
        clean: true
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    externals: {
        react: 'react',
        next: 'next',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {     
                test: /\.(ts|tsx)?$/,
                use: ['ts-loader'],
                exclude: /node_modules/
            }
        ]
    }
}