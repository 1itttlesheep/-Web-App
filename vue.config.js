// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

module.exports = {
    lintOnSave: false,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://iwenwiki.com/',
                changeOrigin: true,
                pathRewrite: { // 路径重写
                    "^/api": ""
                }
            }
        }
    }
}
