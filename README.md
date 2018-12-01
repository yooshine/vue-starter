# Vue-Starter

# Introduction
> 项目采用 git 管理，每一个分支对应着一个功能点，除 `master` 分支外，其他分支都以 `todomvc/stage-{index}` 的形式命名。 index 从 1 开始递增。
> 项目使用了 [TodoMVC](http://todomvc.com/examples/vue/) 中的样式，实现了一个简单的 `todolist` 功能。

# Preparation
##### 1. [Git](https://git-scm.com/)
运行本项目中的代码，最好安装 git，可以切换到不同的分支进行查看代码。如果不安装 git，请选择 `todomvc/stage-1` 分支的代码进行下载。

##### 2. [Nodejs](https://nodejs.org)
进入 Nodejs 官网下载最新版 LTS 版本的 Node 包，当前为 10.14.1 LTS.

Windows 与 MacOS 系统点击安装即可。 Linux 系统可参照[这里](https://nodejs.org/en/download/package-manager/)

安装完成 Nodejs 之后，可以使用 `node` 和 `npm` 命令，`npm` 为 node 包管理工具，类似于 Python 中的 `pip`，或者 Java 中的 `maven`.

##### 3. `vue-cli`
`vue-cli` 是初始化 Vue 项目的工具，使用 `npm install -g vue-cli` 来安装。
vue-cli

# Tutorial
#### 创建一个 Vue 项目
```:sh
# 创建一个基于 Webpack 模板的 Vue 项目。
vue init webpack demo

# 安装依赖
cd demo && npm install

# 运行项目
npm run dev
```

# Branch
#### `master` 分支
`master` 分支为使用 `vue-cli` 初始化项目之后的内容，没有做任何变动。


#### `todomvc/stage-1` 分支
`todomvc/stage-1` 分支中仅使用 `vue` 来开发一个 `todolist`


#### TODO: `todomvc/stage-2` 分支
`todomvc/stage-2` 分支中添加了 `vuex`，`vuex` 是前端页面的数据管理工具，通过使用 `vuex`，我们可以创建一个全局的 `store` 来保存待办事项的数据。


#### TODO: `todomvc/stage-3` 分支
`todomvc/stage-3` 分支中添加了 `vue-router`，`vue-router` 是前端路由管理工具，在单页应用([SPA](https://baike.baidu.com/item/SPA/17536313?fr=aladdin))中，只有一个 HTML 页面，所有的内容都是通过 JavaScript 动态加载和渲染出来的。因此，需要一个路由来区分不同的内容，通过路由，可以映射不同的内容渲染到页面。


# Usage
> 以下为运行本项目的命令。
#### 1. 通过命令行进入到当前工作目录。
`cd /path/to/your/project`
#### 2. 安装依赖包。
`npm install`
#### 3. 运行项目
`npm run dev`
#### 4. 打开浏览器，访问 [http://localhost:8080](http://localhost:8080)
