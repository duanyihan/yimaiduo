<template>
	<div class="box">
		<van-nav-bar
		  title="购物车"
		  right-text="编辑"
		/>
		<van-cell is-link @click="showPopup">查看今日优惠</van-cell>
		<van-popup v-model="show"  position="top" :style="{ height: '30%' }" 
		style="text-align: center; padding: 0.15rem; color: crimson; font-weight: bold;">满300减50！
			<img src="../assets/manjian.png" alt="" width="50%">
		</van-popup>	
		<div class="pic">
			<van-icon name="smile-o" color="#eb5094" size="2rem"/>
			<p>您还没有添加任何商品哦~</p>
		</div>
	</div>
</template>

<script>
	export default{
		//组件为内部守护，离开前做判读
		beforeRouteLeave(to,from,next) {
			let flag =window.confirm("您确定要切换页面吗？");
			if(flag){
				next();
			}else{
				next(false);
			}
		},
		data() {
			return {
			  show: false
			}
		  },
		
		  methods: {
			showPopup() {
			  this.show = true;
			}
		  }
		
	}
	
</script>

<style scoped>
	.page[data-v-7ba5bd90] {
		width: 100%;
		background-color: #f0f0f0f;
	}
	.van-nav-bar{
		background-color: #EB5094;
	}
	.van-nav-bar__title{
		color: #fff;
		font-size: 0.26rem;
	}
	.van-nav-bar__text{
		color: #fff;
		font-size: 0.24rem;
	}
	.pic{
		width: 100%;
		text-align: center;
		color: #535353;
		font-size: 0.24rem;
	}
	
</style>
