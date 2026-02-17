<template>
	<div class="add-update-preview">
		<el-form
			class="add-update-form"
			ref="ruleForm"
			:model="ruleForm"
			:rules="rules"
			label-width="180px"
			>
			<el-form-item class="add-item" label="标题" prop="biaoti">
				<el-input v-model="ruleForm.biaoti" 
					placeholder="标题" clearable :disabled=" false  ||ro.biaoti"></el-input>
			</el-form-item>
			<el-form-item class="add-item" label="封面" v-if="type!='cross' || (type=='cross' && !ro.fengmian)" prop="fengmian">
				<file-upload
					tip="点击上传封面"
					action="file/upload"
					:limit="3"
					:multiple="true"
					:fileUrls="ruleForm.fengmian?ruleForm.fengmian:''"
					@change="fengmianUploadChange"
					></file-upload>
			</el-form-item>
			<el-form-item class="add-item" v-else label="封面" prop="fengmian">
				<img v-if="ruleForm.fengmian.substring(0,4)=='http'" class="upload-img" v-bind:key="index" :src="ruleForm.fengmian.split(',')[0]">
				<img v-else class="upload-img" v-bind:key="index" v-for="(item,index) in ruleForm.fengmian.split(',')" :src="baseUrl+item">
			</el-form-item>
			<el-form-item class="add-item" label="员工账号" prop="yuangongzhanghao">
				<el-select  @change="yuangongzhanghaoChange" v-model="ruleForm.yuangongzhanghao" placeholder="请选择员工账号">
					<el-option
						v-for="(item,index) in yuangongzhanghaoOptions"
						:key="index"
						:label="item"
						:value="item">
					</el-option>
				</el-select>
			</el-form-item>
			<el-form-item class="add-item" label="员工姓名" prop="yuangongxingming">
				<el-input v-model="ruleForm.yuangongxingming" 
					placeholder="员工姓名" clearable :disabled=" false  ||ro.yuangongxingming"></el-input>
			</el-form-item>
			<el-form-item class="add-item"  label="工资月份" prop="gongziyuefen">
				<el-select v-model="ruleForm.gongziyuefen" placeholder="请选择工资月份" :disabled=" false  ||ro.gongziyuefen" >
					<el-option
						v-for="(item,index) in gongziyuefenOptions"
						:key="index"
						:label="item"
						:value="item">
					</el-option>
				</el-select>
			</el-form-item>
			<el-form-item class="add-item" label="基本工资" prop="jibengongzi">
				<el-input-number v-model="ruleForm.jibengongzi" placeholder="基本工资" :disabled=" false ||ro.jibengongzi"></el-input-number>
			</el-form-item>
			<el-form-item class="add-item" label="绩效工资" prop="jixiaogongzi">
				<el-input-number v-model="ruleForm.jixiaogongzi" placeholder="绩效工资" :disabled=" false ||ro.jixiaogongzi"></el-input-number>
			</el-form-item>
			<el-form-item class="add-item" label="加班工资" prop="jiabangongzi">
				<el-input-number v-model="ruleForm.jiabangongzi" placeholder="加班工资" :disabled=" false ||ro.jiabangongzi"></el-input-number>
			</el-form-item>
			<el-form-item class="add-item" label="迟到早退" prop="chidaozaotui">
				<el-input-number v-model="ruleForm.chidaozaotui" placeholder="迟到早退" :disabled=" false ||ro.chidaozaotui"></el-input-number>
			</el-form-item>
			<el-form-item class="add-item" label="请假" prop="qingjia">
				<el-input-number v-model="ruleForm.qingjia" placeholder="请假" :disabled=" false ||ro.qingjia"></el-input-number>
			</el-form-item>
			<el-form-item class="add-item" label="个税" prop="geshui">
				<el-input-number v-model="ruleForm.geshui" placeholder="个税" :disabled=" false ||ro.geshui"></el-input-number>
			</el-form-item>
			<el-form-item class="add-item" label="全勤奖" prop="quanqinjiang">
				<el-input-number v-model="ruleForm.quanqinjiang" placeholder="全勤奖" :disabled=" false ||ro.quanqinjiang"></el-input-number>
			</el-form-item>
			<el-form-item class="add-item" label="实发工资" prop="shifagongzi">
				<el-input v-model="shifagongzi" placeholder="实发工资" disabled></el-input>
			</el-form-item>
			<el-form-item class="add-item" label="登记时间" prop="dengjishijian">
				<el-date-picker
					:disabled=" false  ||ro.dengjishijian"
					format="yyyy 年 MM 月 dd 日"
					value-format="yyyy-MM-dd"
					v-model="ruleForm.dengjishijian" 
					type="date"
					placeholder="登记时间">
				</el-date-picker> 
			</el-form-item>
			<el-form-item class="add-item" label="账号" prop="zhanghao">
				<el-input v-model="ruleForm.zhanghao" 
					placeholder="账号" clearable :disabled=" false  ||ro.zhanghao"></el-input>
			</el-form-item>
			<el-form-item class="add-item" label="姓名" prop="xingming">
				<el-input v-model="ruleForm.xingming" 
					placeholder="姓名" clearable :disabled=" false  ||ro.xingming"></el-input>
			</el-form-item>
			<el-form-item class="add-item" label="备注" prop="beizhu">
				<el-input
					type="textarea"
					:rows="8"
					placeholder="备注"
					v-model="ruleForm.beizhu">
					</el-input>
			</el-form-item>

			<el-form-item class="add-btn-item">
				<el-button class="submitBtn"  type="primary" @click="onSubmit">
					<span class="icon iconfont "></span>
					<span class="text">提交</span>
				</el-button>
				<el-button class="closeBtn" @click="back()">
					<span class="icon iconfont "></span>
					<span class="text">取消</span>
				</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				id: '',
				baseUrl: '',
				ro:{
					biaoti : false,
					fengmian : false,
					yuangongzhanghao : false,
					yuangongxingming : false,
					gongziyuefen : false,
					jibengongzi : false,
					jixiaogongzi : false,
					jiabangongzi : false,
					chidaozaotui : false,
					qingjia : false,
					geshui : false,
					quanqinjiang : false,
					shifagongzi : false,
					dengjishijian : false,
					zhanghao : false,
					xingming : false,
					beizhu : false,
				},
				type: '',
				userTableName: localStorage.getItem('UserTableName'),
				ruleForm: {
					biaoti: '',
					fengmian: '',
					yuangongzhanghao: '',
					yuangongxingming: '',
					gongziyuefen: '',
					jibengongzi: '',
					jixiaogongzi: '',
					jiabangongzi: '',
					chidaozaotui: '',
					qingjia: '',
					geshui: '',
					quanqinjiang: '',
					shifagongzi: '',
					dengjishijian: '',
					zhanghao: '',
					xingming: '',
					beizhu: '',
				},
				yuangongzhanghaoOptions: [],
				gongziyuefenOptions: [],


				rules: {
					biaoti: [
					],
					fengmian: [
					],
					yuangongzhanghao: [
					],
					yuangongxingming: [
					],
					gongziyuefen: [
						{ required: true, message: '工资月份不能为空', trigger: 'blur' },
					],
					jibengongzi: [
						{ required: true, message: '基本工资不能为空', trigger: 'blur' },
						{ validator: this.$validate.isNumber, trigger: 'blur' },
					],
					jixiaogongzi: [
						{ required: true, message: '绩效工资不能为空', trigger: 'blur' },
						{ validator: this.$validate.isNumber, trigger: 'blur' },
					],
					jiabangongzi: [
						{ validator: this.$validate.isNumber, trigger: 'blur' },
					],
					chidaozaotui: [
						{ validator: this.$validate.isNumber, trigger: 'blur' },
					],
					qingjia: [
						{ validator: this.$validate.isNumber, trigger: 'blur' },
					],
					geshui: [
						{ validator: this.$validate.isNumber, trigger: 'blur' },
					],
					quanqinjiang: [
						{ validator: this.$validate.isNumber, trigger: 'blur' },
					],
					shifagongzi: [
						{ validator: this.$validate.isNumber, trigger: 'blur' },
					],
					dengjishijian: [
					],
					zhanghao: [
					],
					xingming: [
					],
					beizhu: [
					],
				},
				centerType: false,
			};
		},
		computed: {
			shifagongzi: {
				get: function () {
					return 0+parseFloat(this.ruleForm.jibengongzi==""?0:this.ruleForm.jibengongzi)+parseFloat(this.ruleForm.jixiaogongzi==""?0:this.ruleForm.jixiaogongzi)+parseFloat(this.ruleForm.jiabangongzi==""?0:this.ruleForm.jiabangongzi)-parseFloat(this.ruleForm.chidaozaotui==""?0:this.ruleForm.chidaozaotui)-parseFloat(this.ruleForm.qingjia==""?0:this.ruleForm.qingjia)-parseFloat(this.ruleForm.geshui==""?0:this.ruleForm.geshui)+parseFloat(this.ruleForm.quanqinjiang==""?0:this.ruleForm.quanqinjiang) || 0
				}
			},



		},
		components: {
		},
		created() {
			if(this.$route.query.centerType){
				this.centerType = true
			}
			//this.bg();
			let type = this.$route.query.type ? this.$route.query.type : '';
			this.init(type);
			this.baseUrl = this.$config.baseUrl;
			this.ruleForm.dengjishijian = this.getCurDate()
		},
		methods: {
			getMakeZero(s) {
				return s < 10 ? '0' + s : s;
			},
			// 下载
			download(file){
				window.open(`${file}`)
			},
			// 初始化
			init(type) {
				this.type = type;
				if(type=='cross'){
					var obj = JSON.parse(localStorage.getItem('crossObj'));
					for (var o in obj){
						if(o=='biaoti'){
							this.ruleForm.biaoti = obj[o];
							this.ro.biaoti = true;
							continue;
						}
						if(o=='fengmian'){
							this.ruleForm.fengmian = obj[o].split(",")[0];
							this.ro.fengmian = true;
							continue;
						}
						if(o=='yuangongzhanghao'){
							this.ruleForm.yuangongzhanghao = obj[o];
							this.ro.yuangongzhanghao = true;
							continue;
						}
						if(o=='yuangongxingming'){
							this.ruleForm.yuangongxingming = obj[o];
							this.ro.yuangongxingming = true;
							continue;
						}
						if(o=='gongziyuefen'){
							this.ruleForm.gongziyuefen = obj[o];
							this.ro.gongziyuefen = true;
							continue;
						}
						if(o=='jibengongzi'){
							this.ruleForm.jibengongzi = obj[o];
							this.ro.jibengongzi = true;
							continue;
						}
						if(o=='jixiaogongzi'){
							this.ruleForm.jixiaogongzi = obj[o];
							this.ro.jixiaogongzi = true;
							continue;
						}
						if(o=='jiabangongzi'){
							this.ruleForm.jiabangongzi = obj[o];
							this.ro.jiabangongzi = true;
							continue;
						}
						if(o=='chidaozaotui'){
							this.ruleForm.chidaozaotui = obj[o];
							this.ro.chidaozaotui = true;
							continue;
						}
						if(o=='qingjia'){
							this.ruleForm.qingjia = obj[o];
							this.ro.qingjia = true;
							continue;
						}
						if(o=='geshui'){
							this.ruleForm.geshui = obj[o];
							this.ro.geshui = true;
							continue;
						}
						if(o=='quanqinjiang'){
							this.ruleForm.quanqinjiang = obj[o];
							this.ro.quanqinjiang = true;
							continue;
						}
						if(o=='shifagongzi'){
							this.ruleForm.shifagongzi = obj[o];
							this.ro.shifagongzi = true;
							continue;
						}
						if(o=='dengjishijian'){
							this.ruleForm.dengjishijian = obj[o];
							this.ro.dengjishijian = true;
							continue;
						}
						if(o=='zhanghao'){
							this.ruleForm.zhanghao = obj[o];
							this.ro.zhanghao = true;
							continue;
						}
						if(o=='xingming'){
							this.ruleForm.xingming = obj[o];
							this.ro.xingming = true;
							continue;
						}
						if(o=='beizhu'){
							this.ruleForm.beizhu = obj[o];
							this.ro.beizhu = true;
							continue;
						}
					}
				}else if(type=='edit'){
					this.info()
				}
				// 获取用户信息
				this.$http.get(this.userTableName + '/session', {emulateJSON: true}).then(res => {
					if (res.data.code == 0) {
						var json = res.data.data;
						if((json.zhanghao!=''&&json.zhanghao) || json.zhanghao==0){
							this.ruleForm.zhanghao = json.zhanghao;
							this.ro.zhanghao = true;
						}
						if((json.xingming!=''&&json.xingming) || json.xingming==0){
							this.ruleForm.xingming = json.xingming;
							this.ro.xingming = true;
						}
					}
				});
				this.$http.get('option/yuangong/yuangongzhanghao', {emulateJSON: true}).then(res => {
					if (res.data.code == 0) {
						this.yuangongzhanghaoOptions = res.data.data;
					}
				});
				this.gongziyuefenOptions = "一月,二月,三月,四月,五月,六月,七月,八月,九月,十月,十一月,十二月".split(',')

				if (localStorage.getItem('raffleType') && localStorage.getItem('raffleType') != null) {
					localStorage.removeItem('raffleType')
					setTimeout(() => {
						this.onSubmit()
					}, 300)
				}
			},
			// 下二随
			yuangongzhanghaoChange () {
				this.$http.get('follow/yuangong/yuangongzhanghao?columnValue=' + this.ruleForm.yuangongzhanghao, {emulateJSON: true}).then(res => {
					if (res.data.code == 0) {
						if(res.data.data.yuangongxingming){
							this.ruleForm.yuangongxingming = res.data.data.yuangongxingming
						}
					}
				});
			},

			// 多级联动参数
			// 多级联动参数
			info() {
				this.$http.get(`yuangongxinzi/detail/${this.$route.query.id}`, {emulateJSON: true}).then(res => {
					if (res.data.code == 0) {
						this.ruleForm = res.data.data;
					}
				});
			},
			// 提交
			async onSubmit() {
				this.ruleForm.shifagongzi = this.shifagongzi
				await this.$refs["ruleForm"].validate(async valid => {
					if(valid) {
						if(this.type=='cross'){
							var statusColumnName = localStorage.getItem('statusColumnName');
							var statusColumnValue = localStorage.getItem('statusColumnValue');
							if(statusColumnName && statusColumnName!='') {
								var obj = JSON.parse(localStorage.getItem('crossObj'));
								if(!statusColumnName.startsWith("[")) {
									for (var o in obj){
										if(o==statusColumnName){
											obj[o] = statusColumnValue;
										}
									}
									var table = localStorage.getItem('crossTable');
									await this.$http.post(table+'/update', obj).then(res => {});
								}
							}
						}


						await this.$http.post(`yuangongxinzi/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(async res => {
							if (res.data.code == 0) {
								this.$message({
									message: '操作成功',
									type: 'success',
									duration: 1500,
									onClose: () => {
										this.$router.go(-1);
										
									}
								});
							} else {
								this.$message({
									message: res.data.msg,
									type: 'error',
									duration: 1500
								});
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
				this.$router.go(-1);
			},
			fengmianUploadChange(fileUrls) {
				this.ruleForm.fengmian = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
			},
		}
	};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.add-update-preview {
		padding: 0 0 20px;
		margin: 0px auto;
		color: #666;
		background: #f6f6f6;
		width: 1400px;
		font-size: 16px;
		position: relative;
		.add-update-form {
			border: 0px solid #fcbb78;
			padding: 20px;
			margin: 20px 0;
			background: #fff;
			width: 100%;
			position: relative;
			.add-item.el-form-item {
				border-radius: 0px;
				padding: 6px 0 0;
				margin: 0 0 20px 0;
				background: none;
				border-color: #475a8310;
				border-width:  0 0 0px;
				border-style: solid;
				/deep/ .el-form-item__label {
					padding: 0 10px 0 0;
					color: #666;
					font-weight: 500;
					width: 180px;
					font-size: inherit;
					line-height: 40px;
					text-align: right;
				}
				/deep/ .el-form-item__content {
					margin-left: 180px;
				}
				.el-input {
					width: auto;
				}
				.el-input /deep/ .el-input__inner {
					border: 1px solid #ddd;
					border-radius: 4px;
					padding: 0 12px;
					box-shadow: none;
					color: inherit;
					width: auto;
					font-size: 16px;
					height: 40px;
				}
				.el-input /deep/ .el-input__inner[readonly="readonly"] {
					border: 0;
					cursor: not-allowed;
					border-radius: 0px;
					padding: 0 12px;
					box-shadow: none;
					color: rgba(85, 85, 127, 1.0);
					background: none;
					width: auto;
					font-size: 16px;
					height: 40px;
				}
				.el-input-number /deep/ .el-input__inner {
					text-align: left;
					border: 1px solid #ddd;
					border-radius: 4px;
					padding: 0 12px;
					box-shadow: none;
					color: inherit;
					width: auto;
					font-size: 16px;
					height: 40px;
				}
				.el-input-number /deep/ .is-disabled .el-input__inner {
					text-align: left;
					border: 0;
					cursor: not-allowed;
					border-radius: 0px;
					padding: 0 12px;
					box-shadow: none;
					color: rgba(85, 85, 127, 1.0);
					background: none;
					width: auto;
					font-size: 16px;
					height: 40px;
				}
				.el-input-number /deep/ .el-input-number__decrease {
					display: none;
				}
				.el-input-number /deep/ .el-input-number__increase {
					display: none;
				}
				.el-select {
					width: auto;
				}
				.el-select /deep/ .el-input__inner {
					border: 1px solid #ddd;
					border-radius: 4px;
					padding: 0 10px;
					color: inherit;
					width: 100%;
					font-size: 16px;
					min-width: inherit !important;
					height: 40px;
				}
				.el-select /deep/ .is-disabled .el-input__inner {
					border: 0;
					cursor: not-allowed;
					border-radius: 0px;
					padding: 0 10px;
					box-shadow: none;
					color: inherit;
					background: none;
					width: 100%;
					font-size: 16px;
					height: 40px;
				}
				.el-date-editor {
					width: auto;
				}
				.el-date-editor /deep/ .el-input__inner {
					border: 1px solid #ddd;
					border-radius: 4px;
					padding: 0 10px 0 30px;
					box-shadow: none;
					color: inherit;
					width: auto;
					font-size: 16px;
					height: 40px;
				}
				.el-date-editor /deep/ .el-input__inner[readonly="readonly"] {
					border: 0;
					cursor: not-allowed;
					border-radius: 0px;
					padding: 0 10px 0 30px;
					box-shadow: none;
					color: inherit;
					background: none;
					width: auto;
					font-size: 16px;
					height: 40px;
				}
				/deep/ .el-upload--picture-card {
					background: transparent;
					border: 0;
					border-radius: 0;
					width: auto;
					height: auto;
					line-height: initial;
					vertical-align: middle;
				}
				/deep/ .upload .upload-img {
					border: 1px solid #ddd;
					cursor: pointer;
					border-radius: 4px;
					color: #999;
					background: #fff;
					width: 80px;
					font-size: 26px;
					line-height: 60px;
					text-align: center;
					height: 60px;
				}
				/deep/ .el-upload-list .el-upload-list__item {
					border: 1px solid #ddd;
					cursor: pointer;
					border-radius: 4px;
					color: #999;
					background: #fff;
					width: 80px;
					font-size: 26px;
					line-height: 60px;
					text-align: center;
					height: 60px;
					font-size: 14px;
					line-height: 1.8;
				}
				/deep/ .el-upload .el-icon-plus {
					border: 1px solid #ddd;
					cursor: pointer;
					border-radius: 4px;
					color: #999;
					background: #fff;
					width: 80px;
					font-size: 26px;
					line-height: 60px;
					text-align: center;
					height: 60px;
				}
				/deep/ .el-upload__tip {
					color: #888;
					font-size: 16px;
				}
				.el-textarea /deep/ .el-textarea__inner {
					border: 1px solid #ddd;
					border-radius: 4px;
					padding: 12px;
					box-shadow: none;
					color: inherit;
					width: auto;
					font-size: 16px;
					min-height: 150px;
					min-width: 48%;
					height: auto;
				}
				.el-textarea /deep/ .el-textarea__inner[readonly="readonly"] {
					border: 0px solid #ddd;
					cursor: not-allowed;
					border-radius: 0px;
					padding: 12px;
					box-shadow: none;
					color: inherit;
					background: none;
					width: auto;
					font-size: 16px;
					min-height: 150px;
					min-width: 50%;
					height: auto;
				}
				/deep/ .el-input__inner::placeholder {
					color: inherit;
					font-size: inherit;
				}
				/deep/ textarea::placeholder {
					color: inherit;
					font-size: inherit;
				}
				.editor {
					background-color: #fff;
					border-radius: 0;
					padding: 0;
					box-shadow: none;
					margin: 0;
					width: 100%;
					min-height: 350px;
					border-color: #ccc;
					border-width: 1px;
					border-style: solid;
					height: auto;
				}
				.upload-img {
					object-fit: cover;
					width: 100px;
					height: 100px;
				}
				.viewBtn {
					border: 0;
					cursor: pointer;
					border-radius: 4px;
					padding: 0 20px;
					margin: 0;
					color: #fff;
					background: #0674fc60;
					display: inline-block;
					width: auto;
					font-size: 14px;
					line-height: 34px;
					height: 34px;
				}
				.viewBtn:hover {
				}
				.unviewBtn {
					border: 0;
					cursor: pointer;
					padding: 0 20px;
					margin: 0;
					color: #333;
					display: inline-block;
					font-size: 14px;
					line-height: 34px;
					border-radius: 4px;
					outline: none;
					background: #eee;
					width: auto;
					height: 34px;
				}
				.unviewBtn:hover {
				}
			}
			.add-btn-item {
				padding: 0;
				margin: 20px 0;
				.submitBtn {
					border: 0;
					cursor: pointer;
					padding: 0 24px;
					margin: 0 20px 0 0;
					display: inline-block;
					font-size: 16px;
					line-height: 44px;
					border-radius: 4px;
					background: #0674fc;
					width: auto;
					text-align: center;
					min-width: 120px;
					height: 44px;
					.icon {
						color: #fff;
					}
					.text {
						color: #fff;
					}
				}
				.submitBtn:hover {
					.icon {
					}
					.text {
					}
				}
				.closeBtn {
					border: 0px solid #ddd;
					cursor: pointer;
					padding: 0 24px;
					margin: 0 20px 0 0;
					color: #fff;
					display: inline-block;
					font-size: 16px;
					line-height: 44px;
					border-radius: 4px;
					background: #858585;
					width: auto;
					text-align: center;
					min-width: 120px;
					height: 44px;
					.icon {
						color: #fff;
					}
					.text {
						color: #fff;
					}
				}
				.closeBtn:hover {
					.icon {
					}
					.text {
					}
				}
			}
		}
	}
	.el-date-editor.el-input {
		width: auto;
	}
</style>
