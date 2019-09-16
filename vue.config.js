const path = require('path');
module.exports = {
    productionSourceMap: false,// 是否打包sourceMap
    outputDir: './myDist',    //设置输出目录
    publicPath: process.env.NODE_ENV === 'production' ? 'http://www.duyiedu.com' : '/' ,
    assetsDir: 'assets',
    chainWebpack: config => {
        config.resolve.alias.set('_v', path.resolve(__dirname, 'src/views'))
    }
}