<template>
	<div class="addEdit-block">
		<el-form
			class="add-update-preview"
			ref="ruleForm"
			:model="ruleForm"
			:rules="rules"
			label-width="180px"
		>
			<template >
				<el-form-item class="input" v-if="type!='info'"  label="公司名称" prop="gongsimingcheng" >
					<el-input v-model="ruleForm.gongsimingcheng" placeholder="公司名称" clearable  :readonly="ro.gongsimingcheng"></el-input>
				</el-form-item>
				<el-form-item v-else class="input" label="公司名称" prop="gongsimingcheng" >
					<el-input v-model="ruleForm.gongsimingcheng" placeholder="公司名称" readonly></el-input>
				</el-form-item>
				<el-form-item class="upload" v-if="type!='info' && !ro.gongsifengmian" label="公司封面" prop="gongsifengmian" >
					<file-upload
						tip="点击上传公司封面"
						action="file/upload"
						:limit="3"
						:multiple="true"
						:fileUrls="ruleForm.gongsifengmian?ruleForm.gongsifengmian:''"
						@change="gongsifengmianUploadChange"
					></file-upload>
				</el-form-item>
				<el-form-item class="upload" v-else-if="ruleForm.gongsifengmian" label="公司封面" prop="gongsifengmian" >
					<img v-if="ruleForm.gongsifengmian.substring(0,4)=='http'&&ruleForm.gongsifengmian.split(',w').length>1" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.gongsifengmian" width="100" height="100">
					<img v-else-if="ruleForm.gongsifengmian.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.gongsifengmian.split(',')[0]" width="100" height="100">
					<img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.gongsifengmian.split(',')" :src="$base.url+item" width="100" height="100">
				</el-form-item>
				<el-form-item class="input" v-if="type!='info'"  label="组织架构" prop="zuzhijiagou" >
					<el-input v-model="ruleForm.zuzhijiagou" placeholder="组织架构" clearable  :readonly="ro.zuzhijiagou"></el-input>
				</el-form-item>
				<el-form-item v-else class="input" label="组织架构" prop="zuzhijiagou" >
					<el-input v-model="ruleForm.zuzhijiagou" placeholder="组织架构" readonly></el-input>
				</el-form-item>
				<el-form-item class="input" v-if="type!='info'"  label="资质荣誉" prop="zizhirongyu" >
					<el-input v-model="ruleForm.zizhirongyu" placeholder="资质荣誉" clearable  :readonly="ro.zizhirongyu"></el-input>
				</el-form-item>
				<el-form-item v-else class="input" label="资质荣誉" prop="zizhirongyu" >
					<el-input v-model="ruleForm.zizhirongyu" placeholder="资质荣誉" readonly></el-input>
				</el-form-item>
				<el-form-item class="input" v-if="type!='info'"  label="公司电话" prop="gongsidianhua" >
					<el-input v-model="ruleForm.gongsidianhua" placeholder="公司电话" clearable  :readonly="ro.gongsidianhua"></el-input>
				</el-form-item>
				<el-form-item v-else class="input" label="公司电话" prop="gongsidianhua" >
					<el-input v-model="ruleForm.gongsidianhua" placeholder="公司电话" readonly></el-input>
				</el-form-item>
				<el-form-item class="input" v-if="type!='info'"  label="公司邮箱" prop="gongsiyouxiang" >
					<el-input v-model="ruleForm.gongsiyouxiang" placeholder="公司邮箱" clearable  :readonly="ro.gongsiyouxiang"></el-input>
				</el-form-item>
				<el-form-item v-else class="input" label="公司邮箱" prop="gongsiyouxiang" >
					<el-input v-model="ruleForm.gongsiyouxiang" placeholder="公司邮箱" readonly></el-input>
				</el-form-item>
				<el-form-item class="input" v-if="type!='info'"  label="公司地址" prop="gongsidizhi" >
					<el-input v-model="ruleForm.gongsidizhi" placeholder="公司地址" clearable  :readonly="ro.gongsidizhi"></el-input>
				</el-form-item>
				<el-form-item v-else class="input" label="公司地址" prop="gongsidizhi" >
					<el-input v-model="ruleForm.gongsidizhi" placeholder="公司地址" readonly></el-input>
				</el-form-item>
				<el-form-item class="date" v-if="type!='info'" label="创立时间" prop="chuanglishijian" >
					<el-date-picker
						format="yyyy 年 MM 月 dd 日"
						value-format="yyyy-MM-dd"
						v-model="ruleForm.chuanglishijian" 
						type="date"
						:readonly="ro.chuanglishijian"
						placeholder="创立时间"
					></el-date-picker> 
				</el-form-item>
				<el-form-item class="input" v-else-if="ruleForm.chuanglishijian" label="创立时间" prop="chuanglishijian" >
					<el-input v-model="ruleForm.chuanglishijian" placeholder="创立时间" readonly></el-input>
				</el-form-item>
			</template>
			<el-form-item class="textarea" v-if="type!='info'" label="经营范围" prop="jingyingfanwei" >
				<el-input
					style="min-width: 200px; max-width: 600px;"
					type="textarea"
					:rows="8"
					placeholder="经营范围"
					v-model="ruleForm.jingyingfanwei" >
				</el-input>
			</el-form-item>
			<el-form-item v-else-if="ruleForm.jingyingfanwei" label="经营范围" prop="jingyingfanwei" >
				<span class="text">{{ruleForm.jingyingfanwei}}</span>
			</el-form-item>
			<el-form-item v-if="type!='info'"  label="公司简介" prop="gongsijianjie" >
				<editor 
					style="min-width: 200px; max-width: 600px;"
					v-model="ruleForm.gongsijianjie" 
					class="editor" 
					action="file/upload">
				</editor>
			</el-form-item>
			<el-form-item v-else-if="ruleForm.gongsijianjie" label="公司简介" prop="gongsijianjie" >
				<span class="text ql-snow ql-editor" v-html="ruleForm.gongsijianjie"></span>
			</el-form-item>
			<el-form-item class="btn">
				<el-button class="btn3"  v-if="type!='info'" type="success" @click="onSubmit">
					<span class="icon iconfont icon-xihuan"></span>
					提交
				</el-button>
				<el-button class="btn4" v-if="type!='info'" type="success" @click="back()">
					<span class="icon iconfont icon-xihuan"></span>
					取消
				</el-button>
				<el-button class="btn5" v-if="type=='info'" type="success" @click="back()">
					<span class="icon iconfont icon-xihuan"></span>
					返回
				</el-button>
			</el-form-item>
		</el-form>
    

	</div>
</template>
<script>
	import { 
		isEmail,
		isPhone,
	} from "@/utils/validate";
	export default {
		data() {
			var validatePhone = (rule, value, callback) => {
				if(!value){
					callback();
				} else if (!isPhone(value)) {
					callback(new Error("请输入正确的电话号码"));
				} else {
					callback();
				}
			};
			var validateEmail = (rule, value, callback) => {
				if(!value){
					callback();
				} else if (!isEmail(value)) {
					callback(new Error("请输入正确的邮箱地址"));
				} else {
					callback();
				}
			};
			return {
				id: '',
				type: '',
			
			
				ro:{
					gongsimingcheng : false,
					gongsifengmian : false,
					zuzhijiagou : false,
					zizhirongyu : false,
					gongsidianhua : false,
					gongsiyouxiang : false,
					gongsidizhi : false,
					chuanglishijian : false,
					jingyingfanwei : false,
					gongsijianjie : false,
				},
			
				ruleForm: {
					gongsimingcheng: '',
					gongsifengmian: '',
					zuzhijiagou: '',
					zizhirongyu: '',
					gongsidianhua: '',
					gongsiyouxiang: '',
					gongsidizhi: '',
					chuanglishijian: '',
					jingyingfanwei: '',
					gongsijianjie: '',
				},

				rules: {
					gongsimingcheng: [
					],
					gongsifengmian: [
					],
					zuzhijiagou: [
					],
					zizhirongyu: [
					],
					gongsidianhua: [
						{ validator: validatePhone, trigger: 'blur' },
					],
					gongsiyouxiang: [
						{ validator: validateEmail, trigger: 'blur' },
					],
					gongsidizhi: [
					],
					chuanglishijian: [
					],
					jingyingfanwei: [
					],
					gongsijianjie: [
					],
				},
			};
		},
		props: ["parent"],
		computed: {



		},
		components: {
		},
		created() {
		},
		methods: {
			// 下载
			download(file){
				window.open(`${file}`)
			},
			// 初始化
			init(id,type) {
				if (id) {
					this.id = id;
					this.type = type;
				}
				if(this.type=='info'||this.type=='else'||this.type=='msg'){
					this.info(id);
				}else if(this.type=='logistics'){
					for(let x in this.ro) {
						this.ro[x] = true
					}
					this.logistics=false;
					this.info(id);
				}else if(this.type=='cross'){
					var obj = this.$storage.getObj('crossObj');
					for (var o in obj){
						if(o=='gongsimingcheng'){
							this.ruleForm.gongsimingcheng = obj[o];
							this.ro.gongsimingcheng = true;
							continue;
						}
						if(o=='gongsifengmian'){
							this.ruleForm.gongsifengmian = obj[o];
							this.ro.gongsifengmian = true;
							continue;
						}
						if(o=='zuzhijiagou'){
							this.ruleForm.zuzhijiagou = obj[o];
							this.ro.zuzhijiagou = true;
							continue;
						}
						if(o=='zizhirongyu'){
							this.ruleForm.zizhirongyu = obj[o];
							this.ro.zizhirongyu = true;
							continue;
						}
						if(o=='gongsidianhua'){
							this.ruleForm.gongsidianhua = obj[o];
							this.ro.gongsidianhua = true;
							continue;
						}
						if(o=='gongsiyouxiang'){
							this.ruleForm.gongsiyouxiang = obj[o];
							this.ro.gongsiyouxiang = true;
							continue;
						}
						if(o=='gongsidizhi'){
							this.ruleForm.gongsidizhi = obj[o];
							this.ro.gongsidizhi = true;
							continue;
						}
						if(o=='chuanglishijian'){
							this.ruleForm.chuanglishijian = obj[o];
							this.ro.chuanglishijian = true;
							continue;
						}
						if(o=='jingyingfanwei'){
							this.ruleForm.jingyingfanwei = obj[o];
							this.ro.jingyingfanwei = true;
							continue;
						}
						if(o=='gongsijianjie'){
							this.ruleForm.gongsijianjie = obj[o];
							this.ro.gongsijianjie = true;
							continue;
						}
					}
				}
				// 获取用户信息
				this.$http({
					url: `${this.$storage.get('sessionTable')}/session`,
					method: "get"
				}).then(({ data }) => {
					if (data && data.code === 0) {
						var json = data.data;
						if(((json.gongsimingcheng!=''&&json.gongsimingcheng) || json.gongsimingcheng==0) && this.$storage.get("role")!="管理员"){
							this.ruleForm.gongsimingcheng = json.gongsimingcheng
							this.ro.gongsimingcheng = true;
						}
					} else {
						this.$message.error(data.msg);
					}
				});
			
			},
			// 多级联动参数

			info(id) {
				this.$http({
					url: `gongsixinxi/info/${id}`,
					method: "get"
				}).then(({ data }) => {
					if (data && data.code === 0) {
						this.ruleForm = data.data;
						//解决前台上传图片后台不显示的问题
						let reg=new RegExp('../../../upload','g')//g代表全部
						this.ruleForm.gongsijianjie = this.ruleForm.gongsijianjie.replace(reg,'../../../django0bbzy4mb/upload');
					} else {
						this.$message.error(data.msg);
					}
				});
			},

			// 提交
			async onSubmit() {
					if(this.ruleForm.gongsifengmian!=null) {
						this.ruleForm.gongsifengmian = this.ruleForm.gongsifengmian.replace(new RegExp(this.$base.url,"g"),"");
					}
					var objcross = this.$storage.getObj('crossObj');
					await this.$refs["ruleForm"].validate(async valid => {
						if (valid) {
							if(this.type=='cross'){
								var statusColumnName = this.$storage.get('statusColumnName');
								var statusColumnValue = this.$storage.get('statusColumnValue');
								if(statusColumnName!='') {
									var obj = this.$storage.getObj('crossObj');
									if(statusColumnName && !statusColumnName.startsWith("[")) {
										for (var o in obj){
											if(o==statusColumnName){
												obj[o] = statusColumnValue;
											}
										}
										var table = this.$storage.get('crossTable');
										await this.$http({
											url: `${table}/update`,
											method: "post",
											data: obj
										}).then(({ data }) => {});
									}
								}
							}
							
							await this.$http({
								url: `gongsixinxi/${!this.ruleForm.id ? "save" : "update"}`,
								method: "post",
								data: this.ruleForm
							}).then(async ({ data }) => {
								if (data && data.code === 0) {
									this.$message({
										message: "操作成功",
										type: "success",
										duration: 1500,
										onClose: () => {
											this.parent.showFlag = true;
											this.parent.addOrUpdateFlag = false;
											this.parent.gongsixinxiCrossAddOrUpdateFlag = false;
											this.parent.search();
											this.parent.contentStyleChange();
										}
									});
								} else {
									this.$message.error(data.msg);
								}
							});
						}
					});
			},
			// 获取uuid
			getUUID () {
				return new Date().getTime();
			},
			// 返回
			back() {
				this.parent.showFlag = true;
				this.parent.addOrUpdateFlag = false;
				this.parent.gongsixinxiCrossAddOrUpdateFlag = false;
				this.parent.contentStyleChange();
			},
			gongsifengmianUploadChange(fileUrls) {
				this.ruleForm.gongsifengmian = fileUrls;
			},
		}
	};
</script>
<style lang="scss" scoped>
	.addEdit-block {
		padding: 30px;
		background: none;
		width: 100%;
	}
	.add-update-preview {
		border-radius: 10px;
		padding: 40px 25% 40px 18%;
		background: #ffffff;
		border-color: #eee;
		border-width: 1px;
		border-style: solid;
	}
	.amap-wrapper {
		width: 100%;
		height: 500px;
	}
	
	.search-box {
		position: absolute;
	}
	
	.el-date-editor.el-input {
		width: auto;
	}
	.add-update-preview >>> .el-form-item {
		border: 0px solid #eee;
		padding: 0;
		margin: 0 0 22px 0;
		display: inline-block;
		width: 100%;
	}
	.add-update-preview .el-form-item >>> .el-form-item__label {
		padding: 0 10px 0 0;
		color: #6e6e6e;
		font-weight: 500;
		width: 180px;
		font-size: 15px;
		line-height: 40px;
		text-align: right;
	}
	
	.add-update-preview .el-form-item >>> .el-form-item__content {
		margin-left: 180px;
	}
	.add-update-preview .el-form-item span.text {
		padding: 0 10px;
		color: #333;
		background: none;
		font-weight: 500;
		display: inline-block;
		font-size: 15px;
		line-height: 40px;
		min-width: 50%;
	}
	
	.add-update-preview .el-input {
		width: 100%;
	}
	.add-update-preview .el-input >>> .el-input__inner {
		border: 1px solid #E8E8E8;
		border-radius: 0px;
		padding: 0 12px;
		color: #666;
		background: #fff;
		width: 100%;
		font-size: 15px;
		min-width: 50%;
		height: 40px;
	}
	.add-update-preview .el-input >>> .el-input__inner[readonly="readonly"] {
		border: 0px solid #ccc;
		cursor: not-allowed;
		border-radius: 0px;
		padding: 0 12px;
		color: #666;
		background: none;
		width: auto;
		font-size: 15px;
		height: 40px;
	}
	.add-update-preview .el-input-number {
		text-align: left;
		width: 100%;
	}
	.add-update-preview .el-input-number >>> .el-input__inner {
		text-align: left;
		border: 1px solid #E8E8E8;
		border-radius: 0px;
		padding: 0 12px;
		color: #666;
		background: #fff;
		width: 100%;
		font-size: 15px;
		min-width: 50%;
		height: 40px;
	}
	.add-update-preview .el-input-number >>> .is-disabled .el-input__inner {
		text-align: left;
		border: 0px solid #ccc;
		cursor: not-allowed;
		border-radius: 0px;
		padding: 0 12px;
		color: #666;
		background: none;
		width: auto;
		font-size: 15px;
		height: 40px;
	}
	.add-update-preview .el-input-number >>> .el-input-number__decrease {
		display: none;
	}
	.add-update-preview .el-input-number >>> .el-input-number__increase {
		display: none;
	}
	.add-update-preview .el-select {
		width: 100%;
	}
	.add-update-preview .el-select >>> .el-input__inner {
		border: 1px solid #E8E8E8;
		border-radius: 0px;
		padding: 0 10px;
		color: #666;
		background: #fff;
		width: 100%;
		font-size: 15px;
		height: 40px;
	}
	.add-update-preview .el-select >>> .is-disabled .el-input__inner {
		border: 0;
		cursor: not-allowed;
		border-radius: 4px;
		padding: 0 10px;
		color: #666;
		background: none;
		width: auto;
		font-size: 15px;
		height: 34px;
	}
	.add-update-preview .el-date-editor {
		width: 100%;
	}
	.add-update-preview .el-date-editor >>> .el-input__inner {
		border: 1px solid #E8E8E8;
		border-radius: 0px;
		padding: 0 10px 0 30px;
		color: #666;
		background: #fff;
		width: 100%;
		font-size: 15px;
		height: 40px;
	}
	.add-update-preview .el-date-editor >>> .el-input__inner[readonly="readonly"] {
		border: 0;
		cursor: not-allowed;
		border-radius: 0px;
		padding: 0 10px 0 30px;
		color: #666;
		background: none;
		width: auto;
		font-size: 15px;
		height: 40px;
	}
	.add-update-preview .viewBtn {
		border: 1px solid #E8E8E8;
		cursor: pointer;
		border-radius: 0px;
		padding: 0 15px;
		margin: 0 20px 0 0;
		color: #666;
		background: #fff;
		width: auto;
		font-size: 15px;
		line-height: 34px;
		height: 34px;
		.iconfont {
			margin: 0 2px;
			color: #666;
			font-size: 16px;
			height: 34px;
		}
	}
	.add-update-preview .viewBtn:hover {
		opacity: 0.8;
	}
	.add-update-preview .downBtn {
		border: 1px solid #E8E8E8;
		cursor: pointer;
		border-radius: 0px;
		padding: 0 15px;
		margin: 0 20px 0 0;
		color: #666;
		background: #fff;
		width: auto;
		font-size: 15px;
		line-height: 34px;
		height: 34px;
		.iconfont {
			margin: 0 2px;
			color: #666;
			font-size: 16px;
			height: 34px;
		}
	}
	.add-update-preview .downBtn:hover {
		opacity: 0.8;
	}
	.add-update-preview .unBtn {
		border: 0;
		cursor: not-allowed;
		border-radius: 4px;
		padding: 0 0px;
		margin: 0 20px 0 0;
		outline: none;
		color: #999;
		background: none;
		width: auto;
		font-size: 15px;
		line-height: 40px;
		height: 40px;
		.iconfont {
			margin: 0 2px;
			color: #fff;
			display: none;
			font-size: 14px;
			height: 34px;
		}
	}
	.add-update-preview .unBtn:hover {
		opacity: 0.8;
	}
	.add-update-preview >>> .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview >>> .upload .upload-img {
		border: 1px solid #E8E8E8;
		cursor: pointer;
		border-radius: 0px;
		color: #666;
		background: #fff;
		width: 90px;
		font-size: 24px;
		line-height: 60px;
		text-align: center;
		height: 60px;
	}
	
	.add-update-preview >>> .el-upload-list .el-upload-list__item {
		border: 1px solid #E8E8E8;
		cursor: pointer;
		border-radius: 0px;
		color: #666;
		background: #fff;
		width: 90px;
		font-size: 24px;
		line-height: 60px;
		text-align: center;
		height: 60px;
	}
	
	.add-update-preview >>> .el-upload .el-icon-plus {
		border: 1px solid #E8E8E8;
		cursor: pointer;
		border-radius: 0px;
		color: #666;
		background: #fff;
		width: 90px;
		font-size: 24px;
		line-height: 60px;
		text-align: center;
		height: 60px;
	}
	.add-update-preview >>> .el-upload__tip {
		color: #666;
		font-size: 15px;
	}
	
	.add-update-preview .el-textarea >>> .el-textarea__inner {
		border: 1px solid #E8E8E8;
		border-radius: 0px;
		padding: 12px;
		color: #666;
		background: #fff;
		width: 100%;
		font-size: 15px;
		min-height: 150px;
		height: auto;
	}
	.add-update-preview .el-textarea >>> .el-textarea__inner[readonly="readonly"] {
				border: 0;
				cursor: not-allowed;
				border-radius: 0px;
				padding: 12px;
				color: #666;
				background: none;
				width: auto;
				font-size: 15px;
				min-width: 400px;
				height: auto;
			}
	.add-update-preview .el-form-item.btn {
		padding: 0;
		margin: 20px 0 0;
		.btn1 {
			border: 0px solid #ccc;
			cursor: pointer;
			border-radius: 6px;
			padding: 0 10px;
			margin: 0 10px 0 0;
			color: #fff;
			background: #0356bb;
			width: auto;
			font-size: 16px;
			min-width: 110px;
			height: 40px;
			.iconfont {
				margin: 0 2px;
				color: #fff;
				display: none;
				font-size: 14px;
				height: 40px;
			}
		}
		.btn1:hover {
			opacity: 0.8;
		}
		.btn2 {
			border: 0px solid #ccc;
			cursor: pointer;
			border-radius: 6px;
			padding: 0 10px;
			margin: 0 10px 0 0;
			color: #fff;
			background: #39c9ee;
			width: auto;
			font-size: 16px;
			min-width: 110px;
			height: 40px;
			.iconfont {
				margin: 0 2px;
				color: #fff;
				display: none;
				font-size: 14px;
				height: 34px;
			}
		}
		.btn2:hover {
			opacity: 0.8;
		}
		.btn3 {
			border: 0px solid #ccc;
			cursor: pointer;
			border-radius: 6px;
			padding: 0 10px;
			margin: 0 10px 0 0;
			color: #fff;
			background: #6ea0dc;
			width: auto;
			font-size: 16px;
			min-width: 110px;
			height: 40px;
			.iconfont {
				margin: 0 2px;
				color: #fff;
				display: none;
				font-size: 14px;
				height: 40px;
			}
		}
		.btn3:hover {
			opacity: 0.8;
		}
		.btn4 {
			border: 0px solid #ccc;
			cursor: pointer;
			border-radius: 6px;
			padding: 0 10px;
			margin: 0 10px 0 0;
			color: #fff;
			background: #4abcff;
			width: auto;
			font-size: 16px;
			min-width: 110px;
			height: 40px;
			.iconfont {
				margin: 0 2px;
				color: #fff;
				display: none;
				font-size: 14px;
				height: 40px;
			}
		}
		.btn4:hover {
			opacity: 0.8;
		}
		.btn5 {
			border: 0px solid #ccc;
			cursor: pointer;
			border-radius: 6px;
			padding: 0 10px;
			margin: 0 10px 0 0;
			color: #fff;
			background: #0977fd;
			width: auto;
			font-size: 16px;
			min-width: 110px;
			height: 40px;
			.iconfont {
				margin: 0 2px;
				color: #fff;
				display: none;
				font-size: 14px;
				height: 40px;
			}
		}
		.btn5:hover {
			opacity: 0.8;
		}
	}
</style>
