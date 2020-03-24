<template>
	<div>
		<div class="ucard">
			<div class="pic">
				<van-icon name="user-circle-o" size=".5rem" color="#fff" class="pic1"></van-icon>
			</div>
			<div class="umsg">
				<h3 v-if="uname">欢迎回来 {{uname}}  |  <span class="btn" @click="logOut">注销</span></h3>
				<h3 v-else>游客请  |  <span class="btn" @click="$router.push('/login?redirect=/user')">登录</span></h3>
				<!-- 如果有uname则显示欢迎
				如果没有则请登录 -->
				<h3>非会员请 | <span class="btn" @click="$router.push('/zhuce?redirect=/user')">注册</span></h3>
			</div>
		</div>
		
	</div>
</template>

<script>
	import Cookie from '../assets/js/Cookie.js';
	export default {
		data(){
			return {uname:""}
		},
		created(){
			this.uname = Cookie.getCookie("uname");
		},
		methods:{
			logOut(){
				this.$http({
					method:"POST",
					url:"http://www.520mg.com/member/index_login.php",
					data:"dopost=exit",
					configs:{withCredentials:true},
				})
				.then(res=>{
					if(res.data.status==1){
						Cookie.delCookie("uname");
						this.uname='';
						this.$toast.success("注销成功");
					}else{
						this.$toast.fail("注销失败");
					}
				})
				
			}
		}
	}
</script>

<style scoped>
	.ucard{
		display: flex;
		padding: 0.15rem;
		color: #fff;
		background-color: #EB5094;
	}
	.umsg{
		flex: 1;
		margin-left: 0.15rem;
	}
	.btn{
		display: inline-block;
		border: 0;
		padding: 0.03rem;
		background-color: #fff;
		color: #EB5094;
		font-size: 0.16rem;
		border-radius: 0.06rem;
	}
	.pic1{
		margin-top: 0.25rem;
	}
</style>
