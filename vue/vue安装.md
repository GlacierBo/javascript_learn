### 搭建环境

``` shell
# 查看版本
$ npm -v
# 升级 npm
$ cnpm install npm -g
# 使用淘宝镜像
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
```

### vue-cli脚手架构建工具

``` shell
$ cnpm install -g vue-cli
# 回车，等待安装...
$ vue
# 回车，若出现vue信息说明表示成功
```

### 用vue-cli构建项目

``` shell
# 创建一个基于 webpack 模板的新项目
$ vue init webpack my-project
# 这里需要进行一些配置，默认回车即可
This will install Vue 2.x version of the template.
```

### 安装依赖

``` shell
# 1. 进入 my-project（项目名）
# 2. 输入 cnpm install
```

### 测试环境是否搭建成功

``` shell
$ cnpm run dev
```

在浏览器输入: <u>localhost:8080</u>

