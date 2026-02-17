import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

	import yuangong from '@/views/modules/yuangong/list'
	import aboutus from '@/views/modules/aboutus/list'
	import renshizhuguan from '@/views/modules/renshizhuguan/list'
	import kaoqinjilu from '@/views/modules/kaoqinjilu/list'
	import yuangongjixiao from '@/views/modules/yuangongjixiao/list'
	import zhaopinxinxi from '@/views/modules/zhaopinxinxi/list'
	import peixunxinxi from '@/views/modules/peixunxinxi/list'
	import systemintro from '@/views/modules/systemintro/list'
	import gongsixinxi from '@/views/modules/gongsixinxi/list'
	import zhaopinleixing from '@/views/modules/zhaopinleixing/list'

	import peixunleixing from '@/views/modules/peixunleixing/list'
	import canjiapeixun from '@/views/modules/canjiapeixun/list'
	import config from '@/views/modules/config/list'
	import yuangongxinzi from '@/views/modules/yuangongxinzi/list'



//2.配置路由   注意：名字
export const routes = [{
	path: '/',
	name: '系统首页',
	component: Index,
	children: [{
		// 这里不设置值，是把main作为默认页面
		path: '/',
		name: '系统首页',
		component: Home,
		meta: {icon:'', title:'center', affix: true}
	}, {
		path: '/updatePassword',
		name: '修改密码',
		component: UpdatePassword,
		meta: {icon:'', title:'updatePassword'}
	}, {
		path: '/pay',
		name: '支付',
		component: pay,
		meta: {icon:'', title:'pay'}
	}, {
		path: '/center',
		name: '个人信息',
		component: center,
		meta: {icon:'', title:'center'}
	}

	,{
		path: '/yuangong',
		name: '员工',
		component: yuangong
	}
	,{
		path: '/aboutus',
		name: '关于我们',
		component: aboutus
	}
	,{
		path: '/renshizhuguan',
		name: '人事主管',
		component: renshizhuguan
	}
	,{
		path: '/kaoqinjilu',
		name: '考勤记录',
		component: kaoqinjilu
	}
	,{
		path: '/yuangongjixiao',
		name: '员工绩效',
		component: yuangongjixiao
	}
	,{
		path: '/zhaopinxinxi',
		name: '招聘信息',
		component: zhaopinxinxi
	}
	,{
		path: '/peixunxinxi',
		name: '培训信息',
		component: peixunxinxi
	}
	,{
		path: '/systemintro',
		name: '系统简介',
		component: systemintro
	}
	,{
		path: '/gongsixinxi',
		name: '公司信息',
		component: gongsixinxi
	}
	,{
		path: '/zhaopinleixing',
		name: '招聘类型',
		component: zhaopinleixing
	}

	,{
		path: '/peixunleixing',
		name: '培训类型',
		component: peixunleixing
	}
	,{
		path: '/canjiapeixun',
		name: '参加培训',
		component: canjiapeixun
	}
	,{
		path: '/config',
		name: '轮播图管理',
		component: config
	}
	,{
		path: '/yuangongxinzi',
		name: '员工薪资',
		component: yuangongxinzi
	}
	,{
			path: '/equipment',
			name: '设备管理',
			component: () => import('@/views/modules/equipment/list.vue')
	}


	]
	},
	{
		path: '/login',
		name: 'login',
		component: Login,
		meta: {icon:'', title:'login'}
	},
	{
		path: '/register',
		name: 'register',
		component: register,
		meta: {icon:'', title:'register'}
	},
	{
		path: '*',
		component: NotFound
	}
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
	mode: 'hash',
	/*hash模式改为history*/
	routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}
export default router;
