export default {
	baseUrl: 'http://localhost:8080/django0bbzy4mb/',
	name: '/django0bbzy4mb',
	indexNav: [
		{
			name: '公司信息',
			url: '/index/gongsixinxi',
		},
		{
			name: '招聘信息',
			url: '/index/zhaopinxinxi',
		},
		{
			name: '培训信息',
			url: '/index/peixunxinxi',
		},
		{
			name: '公告信息',
			url: '/index/news'
		},
	],
	cateList: [
		{
			name: '招聘信息',
			refTable: 'zhaopinleixing',
			refColumn: 'zhaopinleixing',
		},
		{
			name: '公告信息',
			refTable: 'newstype',
			refColumn: 'typename',
		},
	]
}
