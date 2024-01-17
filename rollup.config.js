const postcss = require('rollup-plugin-postcss')

module.exports = {
    rullup(config, options){
        config.plugins.push(
            postcss({
                config: {
                    path: './postcss.config.js'
                },
                extentions: ['css'],
                minimize: true,
                inject: {
                    insertAt: 'top', 
                }
            })
        )
        return config
    }
}