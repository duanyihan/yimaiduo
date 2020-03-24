<template>
	<div class="box">
		<van-cell-group>
		  <van-field
			v-model="value1"
			left-icon="search"
			placeholder="输入商品名称关键字"
		  />
		</van-cell-group>
		
		<div class="content" >
			<div v-for="(item,index) in cate" :key="index" class="content2">
				<p class="da">
				/ {{item.category_cn}} /
				</p>
				<div class="goods" v-for="(goods,index) in item.subcategory" :key="index">
					<div class="col">
						<img :src="goods.img" width="100%" alt="">
						<p class="xiao">{{goods.category_cn}}</p>	
					</div>
				</div>
			</div>
			
		</div>
		
	</div>
</template>

<script>
	export default {
	  data() {
		return {
		  value1: '',
		  cate:[],
		}
	  },
	  created(){
		  this.getCate();
	  },
	  methods:{
		  getCate(){
			  this.$http.get("https://api.ymduo.com/Category/categoryListSix")
			  .then(res=>{
				  this.cate = res.data.result.data;
				  console.log(item[index].category_cn)
			  })
			  .catch(err=>{
				  console.log(err);
			  })
		  }
	  }
	};
</script>

<style scoped="scoped">
	*{margin: 0;padding: 0;}
	.box{box-sizing: border-box; width: 100%;}
	.content .da{
		width: 100%;
		text-align: center;
		font-size: 0.2rem;
		background-color: #f0f0f0;
		padding: 0.15rem 0;
		color: #434343;
	}
	.content .content2{
		/* display: flex; */
		width: 100%;
		padding-bottom: 0.15rem;
	}
	.content .goods{
		display: inline-block;
		width: 30%;
		padding: 0.1rem;
	}
	.content2 .goods .col{
		/* width: 33%; */
		text-align: center;
		font-size: 0.18rem;
		color: #434343;
	}
	.content .goods .col img{
		width: 80%;
	}
</style>
