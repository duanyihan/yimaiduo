<template>
	<div>
		<van-nav-bar
		  title="注册"
		  left-text=""
		  left-arrow
		  @click-left="$router.go(-1)"
		/>
		<van-cell-group style="margin-top: 15px;">
		  <van-field v-model="rname" placeholder="请设置用户名" />
		  <van-field type="password" v-model="rpwd" placeholder="请设置密码" />
		  <van-field type="email" v-model="reml" placeholder="请输入邮箱" />
		</van-cell-group>
		<van-radio-group v-model="radio" >
		  <van-radio name="2" style="margin: 15px;">我已阅读《用户协议》</van-radio>
		</van-radio-group>
		<div style="margin: 15px;">
			<van-button color="#eb5094" block round @click="zhuce()" style="fontSize:0.18rem">注册</van-button>
		</div>
	</div>
</template>

<script>
	import Cookie from '../assets/js/Cookie.js'
	export default {
	  data() {
		return {
		  radio: '1',
		  rname:'',
		  rpwd:'',
		  reml:'',
		}
	  },
	  methods:{
		  zhuce(){
			  this.$http({
				  method:"POST",
				  url:"http://www.520mg.com/member/reg_new2.php",
				  data:`userid=${this.rname}&userpwd=${this.rpwd}&email=${this.reml}`,
				  configs:{withCredentials:true},
			  })
			  .then(res=>{
				  console.log(res.data);
				  if(res.data.status==1){
					  this.$notify({ type: 'success', message: res.data.msg });
					  Cookie.setCookie("rname",this.rname);
					  let redirect = this.$route.query.redirect;
					  //获取用户查询参数redirect值
					  // 当登陆成功时有redirect值,则跳转对应页面,如果没有则到用户页面
					  if(redirect){
					  		this.$router.replace(redirect);
					  	}else{
					  		this.$router.replace("/user");
					  	}
					  }else{
					  	this.$notify({ type: 'warning', message: res.data.msg });
					  }
			  })
		  }
	  }
	}
</script>

<style>
</style>
