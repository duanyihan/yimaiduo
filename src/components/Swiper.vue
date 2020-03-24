<template>
	<div class="swiper-container">
		<!-- 只有gallery有长度时候，才显示Swiper -->
		<div class="swiper-wrapper">
			<div class="swiper-slide">
				<img src="../assets/b1.jpg" alt="" width="100%">
			</div>
			<div class="swiper-slide">
				<img src="../assets/b2.jpg" alt="" width="100%">
			</div>
			<div class="swiper-slide">
				<img src="../assets/b3.jpg" alt="" width="100%">
				<img src="../assets/b4.jpg" alt="" width="100%">
			</div>
			<div class="swiper-slide">
				<img src="../assets/b4.jpg" alt="" width="100%">
			</div>
		</div>
		<div class="swiper-pagination"></div>
	</div>
</template>

<script>
	import Swiper from 'swiper'
	import "swiper/css/swiper.css"
	//导入node_modules里面的 swiper文件夹 swiper类
	//导入node_modules里面的 swiper/css文件夹里的swiper.css
	export default {
		// props:["gallery"],
		//接收gallery数据
		data(){return{}},
		mounted(){
			//当页面初始渲染完毕执行
			this.swiper = new Swiper(".swiper-container",{
				loop:true,
				pagination:{
					el:'.swiper-pagination'//小点指示器
				},
				autoplay:true
			})
		}
	}
</script>

<style>
	.swiper-container{
		width: 100%;
		height: 200px;
	}
	.swiper-pagination-bullet-active{
		background-color: #EB5094;
	}
</style>
