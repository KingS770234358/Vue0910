09webpack的使用
/**
  这个项目只是为了介绍webpack底层打包vue-cli项目 兼容ES5的一些基本知识
  不可以使用这个项目下载的webpack去打包其他的项目,版本号对不上!!!!
  其他使用vue init webpack xxx 命令创建的项目都已经是打包好的 不需要打包!!!!
*/

· ES6的一些介绍

// ES6导入一个js文件(相当于java中import一个类)
require('webpack-merge')
// 导出该文件(类)的某个方法,暴露给其他文件导入
exports.方法名 = function(){}

// 导入组件
import HelloWorld from './components/HelloWorld'
// 导出组件
export default {
  name: 'App',
  components: {
    HelloWorld
  }
}

//编译检查
'use strict' 
`D:\\NodeJS\\node_modules\\node_modules\\webpack-cli\\package.json`
· npm install的理解 
  之前使用 script标签的src属性直接引入axios.js不符合前端工程的规范
  应当在项目目录里 使用 npm install axios =======> [局部安装]
  因此,npm install 类似在pom.xml中引入依赖

· 直接先npm install -g cnpm  cnpm是一个可以从镜像安装包的npm
  镜像上下载的东西很有可能是坏的, 最好直接使用npm install -g XXX@版本 进行安装

· webpack的使用
1.下载webpack[这里是全局安装 不同于上述的局部安装]
  npm install webpack -g       安装打包工具
  npm install webpack-cli -g   安装webpack客户端
  webpack -v [报错] 找不到webpack-cli的package.json文件
  ### 错误解决
  进入webpack的启动文件webpack.js
  定义全局常量:const ABS_PKG_PATH = `D:/NodeJS/node_modules/node_modules/`;
  修改pkgPath常量即可 const pkgPath = require.resolve(ABS_PKG_PATH+`${installedClis[0].package}/package.json`);
2.使用
1)新建空文件夹09webpackLearning,使用IDEA以空项目的形式打开
2)新建一个modules文件夹,用于存放暴露方法的模块(相当于java的类)
3)在modules文件夹下编写hello.js模块(类),暴露sayHi的方法
4)在modules文件夹下编写main.js模块(类),导入hello.js模块并使用它的sayHi方法
5)[打包]创建webpack.config.js配置文件 === 相当于 pom.xml 或是 application.yaml
· entry: 指定webpack用哪个文件作为项目的入口          ----   主启动类
· output: 指定webpack处理生成的文件放置到指定路径      ----  target目录
· module: 模块, 用于处理各种类型的文件                ----   dependencies
· plugin: 插件, 如:热更新、代码重用等                 ----   plugin
· resolve: 设置路径指向                              ----   build resource
· watch: 监听, 用于设置文件改动后自动打包
  在项目目录下运行命令 webpack --watch 则webpack会时刻监听项目文件的改动, 
  发现改动就自动打包项目, 一般打包成bundle.js
·配置webpack.config.js配置文件
// 把项目以webpack形式打包
module.exports ={
    // 1.程序路口 为当前文件夹下的modules文件夹下的main.js文件
    entry: './modules/main.js',
    // 2.将程序打包输出到哪里的配置
    output: {
        // 2.1 输出到哪个文件 一般输出打包成bundle.js
        // 输出到当前文件夹下的js文件夹里,生成bundle.js文件(这个文件就是兼容ES5的文件)
        filename: "./js/bundle.js"
    }
}
·在IDEA窗口下方的终端中,进入项目文件夹里[前提需要以管理员身份运行]
 1.运行命令 npm install --save-dev webpack     
   --save-dev webpack相当于把webpack引入buildpath  在pom.xml中把依赖加入dependencies中
 2.运行webpack命令即可打包成bundle.js ======> dist/js/bundle.js
·编写一个index.html页面 引用生成的 bundle.js
 index.html页面 直接输出了"第一个webpack程序" "A+B=C"
     因为main.js直接调用了两个方法,然后main.js被打包成bundle.js,又因为index.html引入了bundle.js
     所以index.html页面直接输出了两个方法的调用结果
·在项目目录下运行命令 webpack --watch 则webpack会时刻监听项目文件的改动, 
 发现改动就自动直接打包项目, 