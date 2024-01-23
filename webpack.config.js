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
    devServer: {
        static: {
          directory: path.resolve(__dirname, 'dist'),
        },
      },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, 'src'),
                use: ['style-loader', 'css-loader', 'postcss-loader'],
                exclude: /node_modules/,
            },
            {     
                test: /\.(ts|tsx)?$/,
                use: ['ts-loader'],
                exclude: /node_modules/
            }
        ]
    }
}