import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopCartContainer from './components/tabbar/ShopCartContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewInfo from './components/news/NewInfo.vue'
import PhotoList from './components/photos/PhotoList.vue'
export default {
	routes: [
	{
		path:'/',
		redirect: '/home'
	},
	{
		path:'/home',
		component: HomeContainer,
	},
	{
		path:'/home/newslist',
		component: NewsList,
	},
	{
		path:'/member',
		component: MemberContainer
	},
	{
		path:'/cart',
		component: ShopCartContainer
	},
	{
		path:'/search',
		component: SearchContainer
	},
	{
		path:'/home/newsinfo/:id',  //restful 式 路由
		component: NewInfo
	},
	{
		path:'/home/photolist',
		component: PhotoList
	}
	],
	linkActiveClass: 'mui-active'   //用router-link-active 去覆盖mui-active类
}
