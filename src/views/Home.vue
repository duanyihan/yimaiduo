<template>
	<div class="box">
		 <Swiper class="swp"></Swiper>
		<div class="sao"><a href=""><img src="../assets/扫一扫.png" alt=""></a></div>
		<div class="xiao"><a href=""><img src="../assets/消息.png" ></a></div>
		
		<!-- 小图标区 -->
		<div class="icon">
			<ul>
				<li>
					<a href="">
						<img src="../assets/icon1.png" alt="">
						<p>会员产品</p>
					</a>
				</li>
				<li>
					<a href="">
						<img src="../assets/icon2.png" alt="">
						<p>自营专区</p>
					</a>
				</li>
				<li>
					<a href="">
						<img src="../assets/icon3.png" alt="">
						<p>限时抢购</p>
					</a>
				</li>
				<li>
					<a href="">
						<img src="../assets/icon4.png" alt="">
						<p>每日拼团</p>
					</a>
				</li>
				<li>
					<a href="">
						<img src="../assets/icon5.png" alt="">
						<p>我的认领</p>
					</a>
				</li>
			</ul>
			<ul>
				<li>
					<a href="">
						<img src="../assets/icon6.png" alt="">
						<p>领劵中心</p>
					</a>
				</li>
				<li>
					<a href="">
						<img src="../assets/icon7.png" alt="">
						<p>1元专区</p>
					</a>
				</li>
				<li>
					<a href="">
						<img src="../assets/icon8.png" alt="">
						<p>6.6专区</p>
					</a>
				</li>
				<li>
					<a href="">
						<img src="../assets/icon9.png" alt="">
						<p>9.9专区</p>
					</a>
				</li>
				<li>
					<a href="">
						<img src="../assets/icon10.png" alt="">
						<p>企业专区</p>
					</a>
				</li>
			</ul>
			<a href=""><img src="../assets/go1.png" alt="" class="go"></a>
		</div>
		
		<!-- 大图片部分 -->
		<div class="content">
			<div class="pic">
				<a href=""><img src="../assets/bg1.png" alt=""></a>	
			</div>
			<a href=""><img src="../assets/go2.png" alt="" class="go"></a>
			<div class="pic">
				<a href=""><img src="../assets/bg3.png" alt=""></a>	
			</div>
			<a href=""><img src="../assets/go3.png" alt="" class="go"></a>
			<div class="pic">
				<a href=""><img src="../assets/bg4.png" alt=""></a>	
			</div>
			<div class="pic1 pic">
				<a href=""><img src="../assets/bg5.png" alt=""></a>	
			</div>
		</div>
		
		<!-- 猜你喜欢部分 -->
		<div class="like">
			<div class="title">
				<span>·————</span>
				<p>猜你喜欢 · 准点更新</p>
				<span>————·</span>
				<p class="small">GUESS YOU LIKE</p>
			</div>
			
			<!-- 商品部分 -->
			<div class="goods">
				<ul>
					<li>
						<a href="">
							<img src="../assets/good1.png" alt="" class="tu">
							<div class="zi">
								<p class="name">三只松鼠坚果礼包 500g</p>
								<p class="price">￥65.00 <span>￥96.00</span></p>
							</div>
						</a>
						<div class="car"><img src="../assets/car.png" alt=""></div>
					</li>
					<li>
						<a href="">
							<img src="../assets/good11.png" alt="" class="tu">
							<div class="zi">
								<p class="name">新疆薄皮核桃 满口留香 1000g装</p>
								<p class="price">￥85.00 <span>￥100.00</span></p>
							</div>
						</a>
						<div class="car"><img src="../assets/car.png" alt=""></div>
					</li>
					<li>
						<a href="">
							<img src="../assets/good3.png" alt="" class="tu">
							<div class="zi">
								<p class="name">床上四件套 蚕丝被套</p>
								<p class="price">￥165.00 <span>￥296.00</span></p>
							</div>
						</a>
						<div class="car"><img src="../assets/car.png" alt=""></div>
					</li>
					<li>
						<a href="">
							<img src="../assets/good4.png" alt="" class="tu">
							<div class="zi">
								<p class="name">苏泊尔不粘锅 拍一送三</p>
								<p class="price">￥198.00 <span>￥249.00</span></p>
							</div>
						</a>
						<div class="car"><img src="../assets/car.png" alt=""></div>
					</li>
					<li>
						<a href="">
							<img src="../assets/good6.png" alt="" class="tu">
							<div class="zi">
								<p class="name">城野医生毛孔收敛水 100ml进口</p>
								<p class="price">￥88.00 <span>￥120.00</span></p>
							</div>
						</a>
						<div class="car"><img src="../assets/car.png" alt=""></div>
					</li>
					<li>
						<a href="">
							<img src="../assets/good7.png" alt="" class="tu">
							<div class="zi">
								<p class="name">阿尔卑斯棒棒糖</p>
								<p class="price">￥60.00 <span>￥88.00</span></p>
							</div>
						</a>
						<div class="car"><img src="../assets/car.png" alt=""></div>
					</li>
					
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import Swiper from '../components/Swiper.vue'
	export default{
		components:{Swiper},
		data(){
			return{}
		}
	}
</script>

<style scoped="scoped">
	.box{
		text-align: center;
		color: #EB5094;
		width: 100%;
	}
	.box .swp{
		position: relative;
	}
	
	.sao{
		width: 0.4rem;
		height: 0.4rem;
		background-color: rgba(255,255,255,.6);
		position:absolute;
		top: 0.1rem;
		left: 0.1rem;
		z-index: 999;
		text-align: center;
		border-radius: 50%;
	}
	.xiao{
		width: 0.4rem;
		height: 0.4rem;
		background-color: rgba(255,255,255,.6);
		position:absolute;
		top: 0.1rem;
		right: 0.1rem;
		z-index: 999;
		text-align: center;
		border-radius: 50%;
	}
	.sao img, .xiao img{
		display: inline-block;
		width: 0.3rem;
		height: 0.3rem;
		margin-top: 0.05rem;
	}
	
	/* 小图标区 */
	.box .icon{
		padding: 0.1rem 0.2rem;
		border-bottom: 0.26rem solid #eee;
		border-top: 0.26rem solid #eee;
	}
	.box .icon ul{
		display: flex;
		width: 100%;
		text-align:center;
	}
	.box .icon ul li{
		width: 20%;
		margin-bottom: 0.2rem;
	}
	.box .icon ul li img{
		width: 0.8rem;
	}
	.box .icon ul li p{
		font-size: 0.2rem;
		color:#434343;
	}
	.box .go{
		width: 100%;
	}
	
	/* 大图部分 */
	.box .content .pic{
		width: 100%;
		border-top: 0.1rem solid #fff;
		border-bottom: 0.1rem solid #fff;
	}
	.box .content .pic1{
		width: 100%;
		border-top: 0rem solid #fff;
	}
	.box .content .pic img{
		width: 100%;
	}
	
	/* 猜你喜欢部分 */
	.box .like{
		text-align: center;
		margin-bottom: 1rem;
	}
	.box .like .title{
		padding: 0.2rem 0rem;
		text-align: center;
		border-bottom: 0.01rem solid #CCCCCC;
	}
	.box .like .title span{
		color: #ccc;
	}
	.box .like .title p{
		display: inline-block;
		color: #eb5094;
		font-size: 0.24rem;
	}
	.box .like .title .small{
		margin-top: 0.05rem;
		display: block;
		font-size: 0.18rem;
		font-family:"lucida console";
	}
	
	/* 商品部分 */
	.box .goods ul li{
		position: relative;
		padding: 0.1rem 0.2rem;
		border-bottom: 0.01rem solid #CCCCCC;
		display: flex;
	}
	.box .goods ul li .tu{
		display: inline-block;
		margin-right: 0.1rem;
		width: 1.8rem;
		height: 1.8rem;
		
	}
	.box .goods ul li .zi{
		display: inline-block;
	}
	.box .goods ul li .zi .name{
		position: absolute;
		top: 0.2rem;
		font-size: 0.24rem;
		color: #535353;
	}
	.box .goods ul li .zi .price{
		font-size: 0.18rem;
		color: #ea6589;
		position: absolute;
		bottom: 0.1rem;
	}
	.box .goods ul li .zi .price span{
		font-size: 0.18rem;
		color: #999;
		text-decoration: line-through;
	}
	.box .goods .car{
		position: absolute;
		right: 0.2rem;
		bottom: 0.1rem;
	}
	.box .goods .car img{
		width: 0.5rem;
	}
</style>
