<template>
  <div id="app">
	  
	  <transition enter-active-class="slideInRight animated"
	  leave-active-class="slideOutRight animated" mode="in-out">
		   <router-view class="page"/>
	  </transition>
		
    <div id="nav">
		<router-link to="/"><van-icon name="wap-home-o" size="0.32rem"/><p>首页</p></router-link>
		<router-link to="/classify"><van-icon name="goods-collect-o" size="0.32rem"/><p>分类</p></router-link>
		<router-link to="/ymd"><img src="./assets/logo1.png" alt=""><p>易麦朵</p></router-link>
		<router-link to="/car"><van-icon name="shopping-cart-o"  size="0.32rem"/><p>购物车</p></router-link>
		<router-link to="/user"><van-icon name="manager-o"  size="0.32rem"/><p>我的</p></router-link>
    </div>
   
  </div>
</template>

<script>
	
</script>

<style scoped="scoped">
*{margin: 0;padding: 0;}
a{text-decoration: none;color: #777;}
.page{
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0.49rem;
	overflow: auto;
	background-color: #FFF;
}
.animated{
	box-shadow: -8px 0 16px rgba(200,200,200,.4);
	animation-duration: 0.4s !important;
	/* 修改时间 */
}
#nav{
	height: 0.7rem;
	display: flex;
	width: 100%;
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	height: 0.49;
	background-color: #fff;
	padding-top: 0.03rem;
}
#nav a{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex: 1;
}
#nav img{
	width: 0.32rem;
}
.router-link-exact-active{
	color: #eb5094;
}
</style>
