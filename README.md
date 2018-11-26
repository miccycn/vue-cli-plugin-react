# vue-cli-plugin-react

A demo of lightening-talk in VueConf.HangZhou 2018.11

## 准备工作:

准备三个项目文件夹

- myProject：用 vue-cli3 的默认选项生成的项目
  `vue create myProject`
- reactProject：用 create-react-app 的默认选项生成的项目
  `create-react-app reactProject`
- vue-cli-plugin-react：vue-cli 插件项目（我们后面主要是在这个文件夹里玩耍）
  `mkdir vue-cli-plugin-react`
  `cd vue-cli-plugin-react`
  `npm init`

### 步骤：

可通过`git checkout step1`，`git checkout step2`，……，`git checkout step10`切换步骤。

以下前 8 步都可以通过在 myProject 中执行：
`yarn add --dev file:../vue-cli-plugin-react`
`vue invoke react`
`yarn serve`
观察报错和执行情况。

1. 初始化一个名叫 vue-cli-plugin-react 的空的 vue-cli 插件
2. 复制 create-react-app 中除配置文件以外的源文件到 template 目录
3. 在插件中扩展 package.json 安装 react 和 react-dom，渲染模板
4. 修改默认 webpack 入口
5. 修改 babel 配置文件
6. 增加 prompts
7. 修改 ejs 模板，使其接受 prompts 的参数
8. 增加自定义指令
   此时可以在 myProject 中尝试运行
   `yarn vueconf`
   控制台会输出当前项目相关的一些配置信息
9. 增加 ui.js
10. 完善 ui 选项的读写
    此时可以在任意目录下尝试运行
    `vue ui`
    在可视化界面中把 myProject 添加进项目管理界面
    在左侧图标菜单栏中选择“配置”——“vueconf”
    即可看到两个选项，这两个选项可被修改后保存到 `vue.config.js` 中，以便插件后续其他部分需要时调用。
    还可在左侧图标菜单栏中选择“任务”——“vueconf”——“运行”，查看第 8 步时的输出。
