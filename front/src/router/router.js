import VueRouter from 'vue-router'
//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import payList from '../pages/pay'

import yuangongList from '../pages/yuangong/list'
import yuangongDetail from '../pages/yuangong/detail'
import yuangongAdd from '../pages/yuangong/add'
import renshizhuguanList from '../pages/renshizhuguan/list'
import renshizhuguanDetail from '../pages/renshizhuguan/detail'
import renshizhuguanAdd from '../pages/renshizhuguan/add'
import gongsixinxiList from '../pages/gongsixinxi/list'
import gongsixinxiDetail from '../pages/gongsixinxi/detail'
import gongsixinxiAdd from '../pages/gongsixinxi/add'
import zhaopinleixingList from '../pages/zhaopinleixing/list'
import zhaopinleixingDetail from '../pages/zhaopinleixing/detail'
import zhaopinleixingAdd from '../pages/zhaopinleixing/add'
import zhaopinxinxiList from '../pages/zhaopinxinxi/list'
import zhaopinxinxiDetail from '../pages/zhaopinxinxi/detail'
import zhaopinxinxiAdd from '../pages/zhaopinxinxi/add'
import bumenList from '../pages/bumen/list'
import bumenDetail from '../pages/bumen/detail'
import bumenAdd from '../pages/bumen/add'
import peixunleixingList from '../pages/peixunleixing/list'
import peixunleixingDetail from '../pages/peixunleixing/detail'
import peixunleixingAdd from '../pages/peixunleixing/add'
import peixunxinxiList from '../pages/peixunxinxi/list'
import peixunxinxiDetail from '../pages/peixunxinxi/detail'
import peixunxinxiAdd from '../pages/peixunxinxi/add'
import canjiapeixunList from '../pages/canjiapeixun/list'
import canjiapeixunDetail from '../pages/canjiapeixun/detail'
import canjiapeixunAdd from '../pages/canjiapeixun/add'
import kaoqinjiluList from '../pages/kaoqinjilu/list'
import kaoqinjiluDetail from '../pages/kaoqinjilu/detail'
import kaoqinjiluAdd from '../pages/kaoqinjilu/add'
import yuangongjixiaoList from '../pages/yuangongjixiao/list'
import yuangongjixiaoDetail from '../pages/yuangongjixiao/detail'
import yuangongjixiaoAdd from '../pages/yuangongjixiao/add'
import yuangongxinziList from '../pages/yuangongxinzi/list'
import yuangongxinziDetail from '../pages/yuangongxinzi/detail'
import yuangongxinziAdd from '../pages/yuangongxinzi/add'
import newstypeList from '../pages/newstype/list'
import newstypeDetail from '../pages/newstype/detail'
import newstypeAdd from '../pages/newstype/add'
import aboutusList from '../pages/aboutus/list'
import aboutusDetail from '../pages/aboutus/detail'
import aboutusAdd from '../pages/aboutus/add'
import systemintroList from '../pages/systemintro/list'
import systemintroDetail from '../pages/systemintro/detail'
import systemintroAdd from '../pages/systemintro/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'yuangong',
					component: yuangongList
				},
				{
					path: 'yuangongDetail',
					component: yuangongDetail
				},
				{
					path: 'yuangongAdd',
					component: yuangongAdd
				},
				{
					path: 'renshizhuguan',
					component: renshizhuguanList
				},
				{
					path: 'renshizhuguanDetail',
					component: renshizhuguanDetail
				},
				{
					path: 'renshizhuguanAdd',
					component: renshizhuguanAdd
				},
				{
					path: 'gongsixinxi',
					component: gongsixinxiList
				},
				{
					path: 'gongsixinxiDetail',
					component: gongsixinxiDetail
				},
				{
					path: 'gongsixinxiAdd',
					component: gongsixinxiAdd
				},
				{
					path: 'zhaopinleixing',
					component: zhaopinleixingList
				},
				{
					path: 'zhaopinleixingDetail',
					component: zhaopinleixingDetail
				},
				{
					path: 'zhaopinleixingAdd',
					component: zhaopinleixingAdd
				},
				{
					path: 'zhaopinxinxi',
					component: zhaopinxinxiList
				},
				{
					path: 'zhaopinxinxiDetail',
					component: zhaopinxinxiDetail
				},
				{
					path: 'zhaopinxinxiAdd',
					component: zhaopinxinxiAdd
				},
				{
					path: 'bumen',
					component: bumenList
				},
				{
					path: 'bumenDetail',
					component: bumenDetail
				},
				{
					path: 'bumenAdd',
					component: bumenAdd
				},
				{
					path: 'peixunleixing',
					component: peixunleixingList
				},
				{
					path: 'peixunleixingDetail',
					component: peixunleixingDetail
				},
				{
					path: 'peixunleixingAdd',
					component: peixunleixingAdd
				},
				{
					path: 'peixunxinxi',
					component: peixunxinxiList
				},
				{
					path: 'peixunxinxiDetail',
					component: peixunxinxiDetail
				},
				{
					path: 'peixunxinxiAdd',
					component: peixunxinxiAdd
				},
				{
					path: 'canjiapeixun',
					component: canjiapeixunList
				},
				{
					path: 'canjiapeixunDetail',
					component: canjiapeixunDetail
				},
				{
					path: 'canjiapeixunAdd',
					component: canjiapeixunAdd
				},
				{
					path: 'kaoqinjilu',
					component: kaoqinjiluList
				},
				{
					path: 'kaoqinjiluDetail',
					component: kaoqinjiluDetail
				},
				{
					path: 'kaoqinjiluAdd',
					component: kaoqinjiluAdd
				},
				{
					path: 'yuangongjixiao',
					component: yuangongjixiaoList
				},
				{
					path: 'yuangongjixiaoDetail',
					component: yuangongjixiaoDetail
				},
				{
					path: 'yuangongjixiaoAdd',
					component: yuangongjixiaoAdd
				},
				{
					path: 'yuangongxinzi',
					component: yuangongxinziList
				},
				{
					path: 'yuangongxinziDetail',
					component: yuangongxinziDetail
				},
				{
					path: 'yuangongxinziAdd',
					component: yuangongxinziAdd
				},
				{
					path: 'newstype',
					component: newstypeList
				},
				{
					path: 'newstypeDetail',
					component: newstypeDetail
				},
				{
					path: 'newstypeAdd',
					component: newstypeAdd
				},
				{
					path: 'aboutus',
					component: aboutusList
				},
				{
					path: 'aboutusDetail',
					component: aboutusDetail
				},
				{
					path: 'aboutusAdd',
					component: aboutusAdd
				},
				{
					path: 'systemintro',
					component: systemintroList
				},
				{
					path: 'systemintroDetail',
					component: systemintroDetail
				},
				{
					path: 'systemintroAdd',
					component: systemintroAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
