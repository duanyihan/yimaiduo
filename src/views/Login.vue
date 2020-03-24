<template>
	<div>
		<van-nav-bar
		  title="登录"
		  left-text=""
		  left-arrow
		  @click-left="$router.go(-1)"
		/>
		<van-cell-group style="margin-top: 15px;">
		  <van-field v-model="uname" placeholder="请输入用户名" />
		  <van-field type="password" v-model="upwd" placeholder="请输入密码" />
		</van-cell-group>
		<div style="margin: 15px;">
			<van-button color="#eb5094" block round @click="login()" style="fontSize:0.18rem">登录</van-button>
		</div>
	</div>
</template>

<script>
	//单击登陆 把用户名存储到cookie里面
	//从哪个页面登陆，登陆成功后还跳转到哪个页面
	import Cookie from '../assets/js/Cookie.js'
	export default{
		data(){
			return {uname:'',upwd:''}
		},
		methods:{
			login(){
				this.$http({
					method:"POST",
					url:"http://www.520mg.com/member/index_login.php",
					data:`fmdo=login&dopost=login&userid=${this.uname}&pwd=${this.upwd}`,
					configs:{withCredentials:true},
					//允许跨域携带cookie
				})
				.then(res=>{
					console.log(res.data);
					if(res.data.status==1){
						this.$notify({type: 'success', message: res.data.msg});
						Cookie.setCookie("uname",this.uname);
						// 获取用户查询参数redirect
						let redirect = this.$route.query.redirect;
						// 当登陆成功时有redirect值,跳转到对应页面,没有则到我的 页面
						if(redirect){
							this.$router.replace(redirect);
							// 无历史记录
						}else{
							this.$router.replace("/user");
						}
					}else{
						this.$notify({type: 'warning', message: res.data.msg});
					}
				})
				
				}
			}
	}
</script>

<style>
</style>
