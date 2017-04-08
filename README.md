# echart-vueapp
a project of echart webpack es6 axios vue-router




Build Setup

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test


##这个项目是有一个echart3项目展示页面部分扩展来的，当初写得时候没怎么学vue但大概知道这里用json数据传值到表格和图形展示中更好。
###1、在里面添加了vue-router的页面路由，实现页面跳转
###2、运用axios对json数据的收取，是通过拦截行为获取的，由于当时使用vueX所以这里虽然没用也直接将这个使用了
###3、webpack在index.html里面引用静态页面，在config文件下面的 index.js中有设置，默认是将js,css等放在static文件夹下，不设置默认在外面直接html引用显示找不到。。。。。不过在vue 或者mian里面可以引入一些        webpack-simple这个可以直接在html里面应用静态路径
###4、这个项目就展示了地图引用，点击li显示相应的echart图形数据和table数据，通过v-if  和在watch中监控id来实现，vue-router路由使用，:class
