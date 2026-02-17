<template>
	<div class="home-preview">



		<!-- 关于我们 -->
		<div id="about" class="animate__animated">
			<div class="about_item">
				<div class="about_title_box">
					<div class="about_title">{{aboutUsDetail.title}}</div>
					<div class="about_subtitle">{{aboutUsDetail.subtitle}}</div>
				</div>
				<div class="about_img">
					<img :src="baseUrl + aboutUsDetail.picture1">
					<img :src="baseUrl + aboutUsDetail.picture2">
					<img :src="baseUrl + aboutUsDetail.picture3">
				</div>
				<div class="about_content ql-snow ql-editor" v-html="aboutUsDetail.content"></div>
				<div class="about_idea1" />
				<div class="about_idea2" />
				<div class="about_idea3" />
				<div class="about_idea4" />
				<div class="about_more" @click="toDetail('aboutusDetail',aboutUsDetail)">
					<span>查看更多</span>
					<span class="icon iconfont icon-jiantou25"></span>
				</div>
			</div>
		</div>
		<!-- 关于我们 -->

		<!-- 系统简介 -->
		<div id="system" class="animate__animated">
			<div class="system_item">
				<div class="system_title_box">
					<div class="system_title">{{systemIntroductionDetail.title}}</div>
					<div class="system_subtitle">{{systemIntroductionDetail.subtitle}}</div>
				</div>
				<div class="system_img">
					<img :src="baseUrl + systemIntroductionDetail.picture1">
					<img :src="baseUrl + systemIntroductionDetail.picture2">
					<img :src="baseUrl + systemIntroductionDetail.picture3">
				</div>
				<div class="system_content ql-snow ql-editor" v-html="systemIntroductionDetail.content"></div>
				<div class="system_idea1" />
				<div class="system_idea2" />
				<div class="system_idea3" />
				<div class="system_idea4" />
				<div class="system_more" @click="toDetail('systemintroDetail',systemIntroductionDetail)">
					<span>查看更多</span>
					<span class="icon iconfont icon-gengduo1"></span>
				</div>
			</div>
		</div>
		<!-- 系统简介 -->
		<!-- 新闻资讯 -->
		<div id="animate_newsnews" class="news animate__animated">
			<div class="news_title_box">
				<span class="news_title">公告信息</span>
				<span class="news_subhead">{{'news'.toUpperCase()}}</span>
			</div>
			<div v-if="newsList.length" class="list list20 index-pv1">
				<div v-for="(item,index) in newsList" :key="index"  @click="toDetail('newsDetail', item)" class="list-item animation-box">
					<div class="img-box">
						<img :src="baseUrl + item.picture" class="image">
					</div>
					<div class="infoBox">
						<div class="infoBox-left">
							<div class="name">{{item.title}}</div>
							<div class="time_item">
								<span class="icon iconfont icon-shijian21"></span>
								<span class="label">发布时间：</span>
								<span class="text">{{item.addtime.split(' ')[0]}}</span>
							</div>
							<div class="publisher_item">
								<span class="icon iconfont icon-touxiang18"></span>
								<span class="label">发布人：</span>
								<span class="text">{{item.name}}</span>
							</div>
							<div class="like_item">
								<span class="icon iconfont icon-zan10"></span>
								<span class="label">点赞：</span>
								<span class="text">{{item.thumbsupnum}}</span>
							</div>
							<div class="collect_item">
								<span class="icon iconfont icon-shoucang10"></span>
								<span class="label">收藏：</span>
								<span class="text">{{item.storeupnum}}</span>
							</div>
							<div class="view_item">
								<span class="icon iconfont icon-liulan13"></span>
								<span class="label">浏览次数：</span>
								<span class="text">{{item.clicknum}}</span>
							</div>
						</div>
						<div class="desc">{{item.introduction}}</div>
					</div>
				</div>
			</div>
			<div class="moreBtn" @click="moreBtn('news')">
				<span class="text">查看更多</span>
				<i class="icon iconfont icon-gengduo1"></i>
			</div>
		</div>
		<!-- 新闻资讯 -->
		<!-- 特价商品 -->
		<div id="animate_listzhaopinxinxi" class="lists animate__animated">
			<div class="list_title_box">
				<span class="list_title">招聘信息展示</span>
				<span class="list_subhead">{{'zhaopinxinxi'.toUpperCase()}} SHOW</span>
			</div>
			<div class="list list20 index-pv1">
				<div class="list-body">
					<div class="list-item" v-for="(item,index) in zhaopinxinxiList" :key="index" @click="toDetail('zhaopinxinxiDetail', item)">
						<div class="img">
							<img v-if="preHttp(item.fengmian)" :src="item.fengmian.split(',')[0]" alt="" />
							<img v-else :src="baseUrl + (item.fengmian?item.fengmian.split(',')[0]:'')" alt="" />
						</div>
						<div class="infoBox">
							<div class="name">招聘名称:{{item.zhaopinmingcheng}}</div>
							<div class="name">招聘类型:{{item.zhaopinleixing}}</div>
							<div class="time_item">
								<span class="icon iconfont icon-shijian21"></span>
								<span class="label">发布时间：</span>
								<span class="text">{{item.addtime.split(' ')[0]}}</span>
							</div>
							<div class="publisher_item">
								<span class="icon iconfont icon-touxiang02"></span>
								<span class="label">发布人：</span>
								<span class="text">{{item.zhanghao}}</span>
							</div>
							<div class="collect_item">
								<span class="icon iconfont icon-shoucang12"></span>
								<span class="label">收藏：</span>
								<span class="text">{{item.storeupnum}}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="moreBtn" @click="moreBtn('zhaopinxinxi')">
				<span class="text">查看更多</span>
				<i class="icon iconfont icon-gengduo1"></i>
			</div>
	

		</div>
		<!-- 特价商品 -->
	</div>
</template>

<script>
import 'animate.css'
import Swiper from "swiper";

	export default {
		//数据集合
		data() {
			return {
				baseUrl: '',
				aboutUsDetail: {},
				systemIntroductionDetail: {},
				newsList: [],

				zhaopinxinxiList: [],




			}
		},
		created() {
			this.baseUrl = this.$config.baseUrl;
			this.getNewsList();
			this.getAboutUs();
			this.getSystemIntroduction();
			this.getList();
		},
		mounted() {
			window.addEventListener('scroll', this.handleScroll)
			setTimeout(()=>{
				this.handleScroll()
			},100)
			
			this.swiperChanges()
		},
		beforeDestroy() {
			window.removeEventListener('scroll', this.handleScroll)
		},
		//方法集合
		methods: {
			swiperChanges() {
				setTimeout(()=>{
				},750)
			},
			async recommendIndexClick18(index, name) {
				this['recommendIndex18' + name] = index
				await this.getList()
			},


			handleScroll() {
				let arr = [
					{id:'about',css:'animate__'},
					{id:'system',css:'animate__'},
					{id:'animate_listzhaopinxinxi',css:'animate__'},
					{id:'animate_newsnews',css:'animate__'},
				]
			
				for (let i in arr) {
					let doc = document.getElementById(arr[i].id)
					if (doc) {
						let top = doc.offsetTop
						let win_top = window.innerHeight + window.pageYOffset
						// console.log(top,win_top)
						if (win_top > top && doc.classList.value.indexOf(arr[i].css) < 0) {
							// console.log(doc)
							doc.classList.add(arr[i].css)
						}
					}
				}
			},
			preHttp(str) {
				return str && str.substr(0,4)=='http';
			},
			getAboutUs() {
				this.$http.get('aboutus/detail/1', {}).then(res => {
					if(res.data.code == 0) {
						this.aboutUsDetail = res.data.data;
					}
				})
			},
			getSystemIntroduction() {
				this.$http.get('systemintro/detail/1', {}).then(res => {
					if(res.data.code == 0) {
						this.systemIntroductionDetail = res.data.data;
					}
				})
			},
			getNewsList() {
				let data = {
					page: 1,
					limit: 4,
					sort: 'addtime',
					order: 'desc'
				}
				this.$http.get('news/list', {params: data}).then(res => {
					if (res.data.code == 0) {
						this.newsList = res.data.data.list;
					
					}
				});
			},
			getList() {
				let autoSortUrl = "";
				let data = {}
			
				data = {
					page: 1,
					limit: 4,
				}

				this.$http.get('zhaopinxinxi/list', {params: data}).then(res => {
					if (res.data.code == 0) {
						this.zhaopinxinxiList = res.data.data.list;
					}
				});
			},
			toDetail(path, item) {
				this.$router.push({path: '/index/' + path, query: {id: item.id}});
			},
			moreBtn(path) {
				this.$router.push({path: '/index/' + path});
			}
		}
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.home-preview {
		margin: 0px auto;
		flex-direction: column;
		background: #fff;
		display: flex;
		width: 100%;
		#about {
			padding: 20px 0 0;
			margin: 0 auto;
			background: url(http://codegen.caihongy.cn/20241021/513dd95489604aa3bc858f69c015998d.jpg) no-repeat center top;
			width: 100%;
			height: auto;
			order: 1;
			.about_item {
				padding: 0;
				margin: 0px auto;
				z-index: 9;
				overflow: hidden;
				align-content: flex-start;
				background: none;
				display: flex;
				width: 1400px;
				position: relative;
				flex-wrap: wrap;
				height: 780px;
				.about_title_box {
					padding: 0;
					margin: 0;
					background: none;
					width: 100%;
					position: relative;
					text-align: left;
					.about_title {
						margin: 0 auto;
						color: #fff;
						background: none;
						font-weight: 500;
						display: inline-block;
						width: auto;
						font-size: 26px;
						border-color: #fff;
						border-width: 0 0 4px;
						line-height: 50px;
						border-style: solid;
						text-align: left;
					}
					.about_subtitle {
						margin: 0;
						color: #999;
						display: none;
						width: 100%;
						font-size: 18px;
						line-height: 40px;
						text-align: center;
					}
				}
				.about_img {
					padding: 0;
					margin: 0;
					background: none;
					display: flex;
					width: 100%;
					flex-wrap: wrap;
					height: 290px;
					order: 2;
					img:nth-child(1) {
						margin: 0;
						object-fit: cover;
						display: block;
						width: 33%;
						height: 100%;
					}
					img:nth-child(2) {
						margin: 0;
						object-fit: cover;
						display: block;
						width: 34%;
						height: 100%;
					}
					img:nth-child(3) {
						margin: 0;
						object-fit: cover;
						display: block;
						width: 33%;
						height: 100%;
					}
				}
				.about_content {
					padding: 0;
					margin: 20px 0;
					overflow: hidden;
					color: #fff;
					background: none;
					width: 100%;
					font-size: 16px;
					line-height: 30px;
					height: 210px;
				}
				.about_idea1 {
					z-index: -1;
					top: 0;
					background: #d10602;
					display: none;
					width: 50%;
					position: absolute;
					right: 0;
					height: 400px;
				}
				.about_idea2 {
					background: url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat;
					display: none;
					width: 285px;
					height: 100px;
				}
				.about_idea3 {
					background: url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat;
					display: none;
					width: 285px;
					height: 100px;
				}
				.about_idea4 {
					background: url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat;
					display: none;
					width: 285px;
					height: 100px;
				}
				.about_more {
					border: 0px solid #999;
					padding: 0 20px;
					margin: 40px 0 0;
					background: #0673fa;
					display: block;
					width: 230px;
					line-height: 50px;
					text-align: center;
					order: 3;
					span:nth-child(1) {
						color: #fff;
						font-size: 18px;
					}
					span:nth-child(2) {
						color: #fff;
						font-size: 18px;
					}
				}
				.about_more:hover {
					cursor: pointer;
					opacity: 1;
				}
			}
		}
		#system {
			padding: 0;
			margin: 0;
			background: url(http://codegen.caihongy.cn/20241022/5a2e225f57ab451db535f60f456a5e7b.jpg) no-repeat center top / 100% 100%,#e8f2fb;
			width: 100%;
			position: relative;
			height: 880px;
			order: 5;
			.system_item {
				margin: 0 auto;
				display: block;
				width: 1400px;
				flex-wrap: wrap;
				.system_title_box {
					padding: 0;
					margin: 80px 0 0;
					left: calc((100% - 1400px)/2);
					background: none;
					width: 50%;
					position: absolute;
					text-align: left;
					.system_title {
						margin: 0;
						color: #000;
						background: none;
						font-weight: 500;
						width: 100%;
						font-size: 26px;
						line-height: 40px;
						text-align: left;
					}
					.system_subtitle {
						margin: 0;
						color: #999;
						display: none;
						width: 100%;
						font-size: 18px;
						line-height: 40px;
						text-align: center;
					}
				}
				.system_img {
					padding: 0;
					margin: 0;
					background: none;
					display: flex;
					width: 50%;
					justify-content: space-between;
					float: right;
					flex-wrap: wrap;
					height: 100%;
					img:nth-child(1) {
						border-radius: 200px 0 0 200px;
						margin: 0;
						object-fit: cover;
						display: block;
						width: 40%;
						position: absolute;
						right: 0;
						height: 100%;
					}
					img:nth-child(2) {
						border-radius: 50px;
						margin: 0;
						left: calc((100% - 1400px)/2);
						bottom: 40px;
						object-fit: cover;
						display: block;
						width: 20%;
						position: absolute;
						height: 380px;
					}
					img:nth-child(3) {
						border-radius: 50px;
						margin: 0;
						left: calc((100% - 1400px)/2 + 20% + 40px);
						bottom: 40px;
						object-fit: cover;
						display: block;
						width: 20%;
						position: absolute;
						height: 380px;
					}
				}
				.system_content {
					padding: 0;
					margin: 150px 0 0;
					z-index: 99;
					overflow: hidden;
					color: #000;
					background: none;
					width: 57%;
					font-size: 16px;
					line-height: 30px;
					float: left;
					height: 270px;
				}
				.system_idea1 {
					padding: 0;
					margin: 0;
					z-index: 0;
					overflow: hidden;
					color: #666;
					background: #fff;
					display: none;
					width: 400px;
					font-size: 16px;
					line-height: 30px;
					height: 480px;
				}
				.system_idea2 {
					background: url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat;
					display: none;
					width: 285px;
					height: 100px;
				}
				.system_idea3 {
					background: url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat;
					display: none;
					width: 285px;
					height: 100px;
				}
				.system_idea4 {
					background: url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat;
					display: none;
					width: 285px;
					height: 100px;
				}
				.system_more {
					border: 0px solid #999;
					margin: 0;
					z-index: 999;
					top: 75px;
					background: #0673fa;
					display: block;
					width: 230px;
					line-height: 50px;
					position: absolute;
					right: 45%;
					float: right;
					text-align: center;
					span:nth-child(1) {
						color: #fff;
						font-size: 16px;
					}
					span:nth-child(2) {
						color: #fff;
						font-size: 16px;
					}
				}
				.system_more:hover {
					cursor: pointer;
					opacity: 1;
				}
			}
		}
		.news {
			padding: 0;
			margin: 0;
			background: #e7f3ff;
			width: 100%;
			position: relative;
			order: 7;
			.news_title_box {
				padding: 60px calc((100% - 1400px)/2) 0;
				margin: 0;
				background: #fff;
				width: 100%;
				position: relative;
				text-align: left;
				height: 160px;
				.news_title {
					padding: 0 20px 0 103px;
					margin: 0;
					color: #fff;
					background: url(http://codegen.caihongy.cn/20241021/83b76ba643c24f378a5bfd58e665e1f9.png) no-repeat left center,#0674fc;
					font-weight: 600;
					display: inline-block;
					letter-spacing: 4px;
					width: auto;
					font-size: 32px;
					line-height: 100px;
					text-align: left;
					min-width: 300px;
				}
				.news_subhead {
					margin: 0;
					color: #999;
					display: none;
					width: 100%;
					font-size: 18px;
					line-height: 40px;
					text-align: center;
				}
			}
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
			.list20 {
				padding: 80px 0 20px;
				margin: 0 auto;
				background: none;
				display: flex;
				width: 1400px;
				justify-content: space-between;
				flex-wrap: wrap;
				height: auto;
				.list-item {
					cursor: pointer;
					border: 2px solid #0674fc;
					border-radius: 8px;
					padding: 80px 20px 20px;
					margin: 0 0 60px;
					background: #fff;
					display: flex;
					width: 49%;
					position: relative;
					transition: all 0s;
					height: auto;
					.img-box {
						border: 1px solid #eee;
						padding: 10px;
						overflow: hidden;
						background: #fff;
						display: none;
						width: 200px;
						height: 200px;
						img {
							object-fit: cover;
							display: block;
							width: 100%;
							height: 100%;
						}
					}
					.infoBox {
						padding: 0;
						overflow: hidden;
						align-content: flex-start;
						flex: 1;
						display: flex;
						flex-wrap: wrap;
						height: auto;
						.infoBox-left {
							padding: 0;
							margin: 0;
							color: #0674fc;
							width: 100%;
							font-size: 14px;
							order: 2;
							.name {
								padding: 0;
								overflow: hidden;
								color: #333;
								top: 40px;
								white-space: nowrap;
								width: 93%;
								font-size: 15px;
								line-height: 40px;
								text-overflow: ellipsis;
								position: absolute;
							}
							.time_item {
								border-radius: 8px 8px 8px 0;
								padding: 10px;
								top: -20px;
								color: #fff;
								left: -2px;
								background: #0674fc;
								display: inline-block;
								position: absolute;
								.icon {
									margin: 0 2px 0 0;
									line-height: 28px;
								}
								.label {
									line-height: 1.5;
								}
								.text {
									line-height: 1.5;
								}
							}
							.publisher_item {
								margin: 0 10px 0 0;
								display: inline-block;
								.icon {
									margin: 0 2px 0 0;
									line-height: 28px;
								}
								.label {
									line-height: 1.5;
								}
								.text {
									line-height: 28px;
								}
							}
							.like_item {
								margin: 0 10px 0 0;
								display: inline-block;
								.icon {
									margin: 0 2px 0 0;
									line-height: 28px;
								}
								.label {
									line-height: 1.5;
								}
								.text {
									line-height: 28px;
								}
							}
							.collect_item {
								margin: 0 10px 0 0;
								display: inline-block;
								.icon {
									margin: 0 2px 0 0;
									line-height: 28px;
								}
								.label {
									line-height: 1.5;
								}
								.text {
									line-height: 28px;
								}
							}
							.view_item {
								display: inline-block;
								.icon {
									margin: 0 2px 0 0;
									line-height: 28px;
								}
								.label {
									line-height: 1.5;
								}
								.text {
									line-height: 28px;
								}
							}
						}
						.desc {
							margin: 0 0 10px;
							color: #868686;
							display: flex;
							width: 100%;
							font-size: 14px;
							line-height: 1.5;
							align-items: center;
							flex-wrap: wrap;
						}
					}
					
				}
				.list-item:hover {
					box-shadow: 1px 2px 6px #0674fc;
					.infoBox {
						.infoBox-left {
							.name {
							}
							.time_item {
								.icon {
								}
								.label {
								}
								.text {
								}
							}
							.publisher_item {
								.icon {
								}
								.label {
								}
								.text {
								}
							}
							.like_item {
								.icon {
								}
								.label {
								}
								.text {
								}
							}
							.collect_item {
								.icon {
								}
								.label {
								}
								.text {
								}
							}
							.view_item {
								.icon {
								}
								.label {
								}
								.text {
								}
							}
						}
						.desc {
						}
					}
				}
			}
			.moreBtn {
				border: 0px solid #999;
				cursor: pointer;
				padding: 0 20px;
				margin: 10px calc((100% - 1200px)/2)  0 0;
				background: rgba(255,255,255,.9);
				display: none;
				width: auto;
				line-height: 32px;
				float: right;
				text-align: center;
				.text {
					color: #333;
					font-size: 15px;
				}
				.icon {
					color: #333;
					font-size: 15px;
				}
			}
		}
		.lists {
			padding: 0;
			margin: 0;
			background: url() no-repeat center center;
			width: 100%;
			position: relative;
			order: 9;
			.list_title_box {
				padding: 0;
				margin: 0;
				background: url(http://codegen.caihongy.cn/20241022/3c340c4cbaee46cca03232dea2325172.png) no-repeat center top;
				width: 100%;
				position: relative;
				text-align: center;
				height: 172px;
				.list_title {
					margin: 0 auto 0;
					color: #fff;
					background: none;
					font-weight: 600;
					display: block;
					width: 1400px;
					font-size: 26px;
					line-height: 142px;
					text-align: left;
				}
				.list_subhead {
					margin: 0;
					color: #999;
					display: none;
					width: 100%;
					font-size: 18px;
					line-height: 40px;
					text-align: center;
				}
			}
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
			.list20 {
				margin: 30px auto;
				overflow: hidden;
				color: #eee;
				background: #fff;
				width: 1440px;
				clear: both;
				font-size: 14px;
				.list-body {
					margin: 0 auto;
					display: flex;
					width: 100%;
					justify-content: space-between;
					position: relative;
					flex-wrap: wrap;
					.list-item {
						border: 2px solid #fff;
						padding: 20px;
						margin: 10px 10px 15px;
						z-index: 99;
						overflow: hidden;
						display: flex;
						width: calc(50% - 20px);
						position: relative;
						height: auto;
						.img {
							border: 0px solid #fff;
							overflow: hidden;
							width: 40%;
							height: 250px;
							img {
								border-radius: 8px;
								object-fit: cover;
								width: 100%;
								height: 100%;
							}
						}
						.infoBox {
							padding: 10px 25px;
							flex-direction: row;
							align-content: center;
							background: #fff;
							flex: 1;
							display: flex;
							width: 55%;
							justify-content: space-between;
							align-items: center;
							flex-wrap: wrap;
							transition: all 0.5s;
							text-align: left;
							.name {
								padding: 0;
								overflow: hidden;
								color: #0674fc;
								white-space: nowrap;
								display: block;
								width: 100%;
								font-size: 15px;
								line-height: 30px;
								text-overflow: ellipsis;
							}
							.price {
								padding: 5px 0px;
								color: #d90000;
								width: 100%;
								font-size: 20px;
							}
							.time_item {
								padding: 5px 0;
								color: #00ddff;
								width: 100%;
								order: 6;
								.icon {
									margin: 0 2px 0 0;
									line-height: 1.5;
								}
								.label {
									line-height: 1.5;
								}
								.text {
									line-height: 1.5;
								}
							}
							.publisher_item {
								padding: 0;
								color: #0066c0;
								width: 49%;
								order: 5;
								.icon {
									margin: 0 2px 0 0;
									line-height: 1.5;
								}
								.label {
									line-height: 1.5;
								}
								.text {
									line-height: 1.5;
								}
							}
							.like_item {
								padding: 0;
								color: #0674fc;
								width: 49%;
								order: 3;
								.icon {
									margin: 0 2px 0 0;
									line-height: 1.5;
								}
								.label {
									line-height: 1.5;
								}
								.text {
									line-height: 1.5;
								}
							}
							.collect_item {
								padding: 0;
								color: #ffb41d;
								width: 49%;
								order: 4;
								.icon {
									margin: 0 2px 0 0;
									line-height: 1.5;
								}
								.label {
									line-height: 1.5;
								}
								.text {
									line-height: 1.5;
								}
							}
							.view_item {
								padding: 0;
								color: #25b8b3;
								width: 49%;
								.icon {
									margin: 0 2px 0 0;
									line-height: 1.5;
								}
								.label {
									line-height: 1.5;
								}
								.text {
									line-height: 1.5;
								}
							}
						}
					}
					.list-item:hover {
						box-shadow: 1px 2px 6px #0674fc;
						.img {
							img {
								transform: scale(1);
								transition: all 0.5s ease-out;
							}
						}
						.infoBox {
							cursor: pointer;
							height: 100%;
						}
					}
				}
			}
			.moreBtn {
				border: 0px solid #999;
				cursor: pointer;
				margin: 0;
				z-index: 999;
				display: block;
				line-height: 50px;
				right: calc((100% - 1400px)/2) ;
				float: right;
				top: 15px;
				background: #0673fa;
				width: 230px;
				position: absolute;
				text-align: center;
				.text {
					color: #fff;
					font-size: 16px;
				}
				.icon {
					color: #fff;
					font-size: 16px;
				}
			}
		}
	}
</style>
