# vue-cli-multipage
根据vue-cli修改的vue + webpack 多页面脚手架

## 使用方法

##### 安装依赖
npm install

##### 开发
npm run dev

##### 生产
npm run build

##### 注意要点
1、在src/pages文件夹下,一个子文件夹对应一个页面,如已存在的home、index文件夹。
每个页面文件夹必须要有app.js(多页面入口)、App.vue,
每个页面默认使用src/index.html作为模版,若想给某个页面设置单独的模版,在页面文件夹新建文件名为app.html
的html文件即可<br>
2、公共css、js文件放在static文件夹下(项目中已有示例)<br>
3、图片等单页资源文件放在pages/*/static文件夹下,这样当不需要某一页面时,直接删除文件夹即可.需注意整个项目所有不同图片的文件名不可重复,若重复打包后会覆盖.若图片相同建议取相同的文件名,否则打包后占用空间.(已有示例)

##### 如有疑问请联系QQ410310344
