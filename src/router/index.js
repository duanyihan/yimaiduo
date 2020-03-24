import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Classify from '../views/Classify.vue'
import Ymd from '../views/Ymd.vue'
import Car from '../views/Car.vue'
import User from '../views/User.vue'
import Login from '../views/Login.vue'
import NoMatch from '../views/NoMatch.vue'
import Zhuce from '../views/Zhuce.vue'

Vue.use(VueRouter)

const routes = [
	{
		path:'/set',
		redirect:'/user'
	},
	// 路由重定向
  {
    path: '/',
    name: 'Home',
    component: Home,
		alias:['/home','/main']
  },
	//路由别名
	  {
	  path: '/classify',
	  name: 'Classify',
	  component: Classify
	},
	  {
	  path: '/ymd',
	  name: 'Ymd',
	  component: Ymd
	},
	  {
	  path: '/car',
	  name: 'Car',
	  component: Car,
		meta:{requireAuth:true},
		//requireAuth是自定义的元信息，代表当前页面需要权限才能进入
	},
	  {
	  path: '/user',
	  name: 'User',
	  component: User
	},
	{
		path: '/login',
		name: 'Login',
		component: Login
	},
	{
		path:'/zhuce',
		name:'Zhuce',
		component:Zhuce
	},
		{
		path: '*',
		name: 'NoMatch',
		component: NoMatch
	}
]

const router = new VueRouter({
  routes
})

import Cookie from '../assets/js/Cookie.js';
//当进入到购物车页面钱判断用户是否登陆，如果没有则跳转到登陆页面
router.beforeEach((to,from,next)=>{
	//判断to的路由元信息是否需要权限
	if(to.meta.requireAuth){
		if(!Cookie.getCookie("uname")){
			//如果没有用户名，则跳转到登录
			next("/login?redirect="+to.path);
			// to.path要去页面的地址
		}else{
			next();
		}
	}else{
		next();
	}
})
	


export default router
