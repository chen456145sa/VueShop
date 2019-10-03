import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopCartContainer from './components/tabbar/ShopCartContainer.vue'
export default {
	routes: [
	{
		path:'/',
		redirect: '/home'
	},
	{
		path:'/home',
		component: HomeContainer
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
	}
	],
	linkActiveClass: 'mui-active'   //用router-link-active 去覆盖mui-active类
}
