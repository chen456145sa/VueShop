# shop-vue
> A Vue.js project
##制作首页App组件
1.完成Header区域，使用的是Mint-UI 中的Header
2.制作底部的Tabber 区域，使用的是Mui 的Tabbar
3.购物车的图标需要另外引入 icons-extra.css 和 字体 mui-icons-extra.ttf 文件
4.要在中间区放置router-view 来展现路由
5.修改Tabber的路由 ，用router-link-active 去覆盖mui-active类 
6.创建4个路由对应的组件
7.在组件中使用v-for 时 必须要绑定 :key属性 

##新闻资讯
1.css布局 使用media-list 
2.获取数据使用vue-resource 发送jsonp请求 
3.使用node 自定义数据接口
4.新闻详情页面 把列表的每一项修改为router-link, 在跳转时 要提供位于标识符 id
5.配置路由
6.创建新闻详情页 NewInfo.vue,rest形式获得的数据{{$route.params}}

##加载更多功能
1.绑定点击事件，pageIndex 自增
2.每当pageIndex 自增 时 发送ajax 请求数据
3.将得到的数据 拼接到原来的comments 上  使用 this.comments.concat( data ) 
