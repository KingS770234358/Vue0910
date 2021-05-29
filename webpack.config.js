// 把项目以webpack形式打包
module.exports ={
    // 1.程序路口 为当前文件夹下的modules文件夹下的main.js文件
    entry: './modules/main.js',
    // 2.将程序打包输出到哪里的配置
    output: {
        // 2.1 输出到哪个文件 一般输出成bundle.js
        // 输出到当前文件夹下的js文件夹里,生成bundle.js文件(这个文件就是兼容ES5的文件)
        filename: "./js/bundle.js",
    }
};