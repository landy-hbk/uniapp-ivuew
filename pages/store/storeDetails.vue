<template>
	<view class="storeDetils-view">
		<view class="store-bg"></view>
		<view class="store-info">
			<view class="store-top">
				<text class="store-title">{{ storeName }}</text>
				<image src="../../static/images/store_cover.png" class="store-img" />
				<view class="subtitle">
					<text class="start">⭐5</text>
					<text class="delivery-time ">配送约30分钟</text>
				</view>
				<view class="preferential">
					<text class="preferential-label">35减3</text>
					<text class="preferential-label">45减8</text>
				</view>
			</view>
			<view class="">
				<u-tabs :list="tabList"
					:class="`tabPosition tabs ${tabPosition === 'relative' ? 'tab-rel' : 'tab-abs'}`"
					@change="tabChange"
				>
				</u-tabs>
				<view :class="`tab-view  ${tabPosition === 'relative' ? 'tab-rel' : 'tab-abs'}`">
					<view class="store-goods" v-show="tabIndex === 0">
						<view class="goods-left">
							<view class="goods-classify" v-for="(v, k) in classifyListData" :key="k"
								@click="changeScrollId(`tab_id_${k}`)">
								<text class="classify-text">
									<!-- <image src="" mode="" class="classify-icon"></image> -->
									{{ v.title }}
								</text>
							</view>
						</view>
						<view class="goods-right">
							<scroll-view scroll-y="true" class="scroll-Y" scroll-with-animation
								:scroll-into-view="scrollId">
								<view class="goods-list-warrper">
									<view class="goods-group" v-for="(v, k) in goodsListData" :key="k"
										:id="`tab_id_${k}`">
										<view class="list-title">
											{{ v.name }}
										</view>
										<view class="goods-item" v-for="(i, ik) in v.goods" :key="ik">
											<image :src="i.img" mode="" class="goods-cover"></image>
											<view class="goods-content">
												<text class="goods-title">{{ i.title }}</text>
												<view class="goods-subtitle">
													<text class="weight-num">1人份</text>
													<text class="profile">{{ i.subtitle }}</text>
												</view>
												<text class="saleNum">月售{{ i.saleNum || 0 }}</text>
												<view class="bottom">
													<text class="price">{{ i.price }}</text>
													<u-number-box 
														button-size="28" 
														color="#233" 
														bgColor="#f8c74e"
														iconStyle="color: #233" 
														class="number-input" 
														:min="0" 
														:max="100" 
														@change="numInputChange($event, i)"
													></u-number-box>
												</view>
											</view>
										</view>
									</view>
								</view>
							</scroll-view>
						</view>
						
						<view class="place-order-btn">
							<view class="btn-warrper">
								<view class="place-info">
									<text class="palce-num">已购买+{{ payforNum }}</text>
									<view class="total"> 
										<text class="place-price">￥{{ payforTotal }}</text>
										<text class="distribution-price">预估配送费￥2</text>
									</view>
								</view>
								<text class="star-price" v-if="!payforIsok">还差￥{{ parforGapPrice }}起送</text>
								<view class="payfor-btn" v-else @click="jumpOrderView">
									去结算
								</view>
							</view>
						
						</view>
					
					</view>
					
					<view class="store-comment" v-show="tabIndex === 1">
						<view class="store-rate">
							<view class="rate-left">
								<text class="rate-num">4.8</text>
								<view class="rate-box">
									<text class="rate-title">商家评分</text>
									<u-rate v-model="rateNumber" gutter="1" inactiveColor="#b2b2b2" activeColor="#ffd44d" readonly ></u-rate>
								</view>
							</view>
							<view class="rate-label">
								<view class="lable">
									<text class="label-name">口味</text>
									<text class="lable-num">4.8</text>
								</view>
								<view class="lable rate-margin">
									<text class="label-name">包装</text>
									<text class="lable-num">4.7</text>
								</view>
								<view class="lable">
									<text class="label-name">配送</text>
									<text class="lable-num">4.9</text>
								</view>
							</view>
						</view>
						
						<view class="comment-label">
							<view 
								:class="{
									'label-item': true,
									'active': k === commentLabelCurrent,
								}" 
								v-for="(v,k) in commentLabelList" :key="k"
								@click="changeCommentLabel(k)"
							>
								<text class="lable-name">{{ v.name }}</text>
								<text class="label-num">{{ v.total }}</text>
							</view>
						</view>
						
						<view class="comment-list">
							<view class="comment-item" v-for="(v, k) in commentList" :key="k">
								<view class="comment-header">
									<view class="header-left">
										<image src="../../static/images/user_default.png" mode="" class="user-cover"></image>
										<view class="user-rate">
											<text class="user-name">匿名用户</text>
											<view class="rate-wrrper">
												<u-rate v-model="rateNumber" gutter="1" inactiveColor="#b2b2b2" activeColor="#ffd44d" readonly ></u-rate>
												<text class="rate-text">非常满意</text>
											</view>
										</view>
									</view>
									<text class="time">2023-05-05</text>
								</view>
								<view class="comment-content">
									<view class="comment-body">
										好吃，很喜欢猪扒，鸡翅的话感觉里面味在入近去点就更好了
									</view>
									<view class="comment-pictrue">
										<view class="pictrue-item-warrper" v-for="(v,k) in [,,,,]" :key="k">
											<image src="../../static/images/good_3.jpg" mode="" class="pictrue-item"></image>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
					<view class="store-detail" v-show="tabIndex === 2">
						<view class="detail-list">
							<view class="detail-item">
								<u-icon name="map" color="#909399" size="20" class="detail-icon"></u-icon>
								<text class="detail-title">广州市番禺区市桥街东涌路东风大街2座103之一</text>
							</view>
							<view class="detail-item">
								<u-icon name="file-text" color="#909399" size="20" class="detail-icon"></u-icon>
								<text class="detail-title">查看食品安全档案</text>
							</view>
							<view class="detail-item">
								<u-icon name="clock" color="#909399" size="20" class="detail-icon"></u-icon>
								<text class="detail-title">配送时间：09:50-18:25</text>
							</view>
							<view class="detail-item">
								<u-icon name="volume" color="#909399" size="20" class="detail-icon"></u-icon> 
								<text class="detail-title line-1">欢迎光临，如果您在选购或用餐过程中有任何疑问以及建议，可第一时间联系我们，小店将竭诚为您服务，祝您用餐愉快！</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import {
		onMounted,
		ref,
		reactive,
		watch,
	} from 'vue'
	import {
		goodsList,
		classifyList
	} from '@/const/goods.js'
	// import { onPageScroll } from '@dcloudio/uni-app'  
	import { formatFloat } from '@/utils/number.js'
	export default {
		// onPageScroll(){}, // 需要在这里声明  
		setup() {
			const storeName = ref('');
			const tabList = reactive([{
					name: '点菜',
				},
				{
					name: '评价',
					badge: {
						value: 1,
					}
				},
				{
					name: '商家',
				}
			]);
			const tabIndex = ref(0);
			const tabChange = (e) => {
				// console.log(e, 'e')
				const { index } = e;
				
				tabIndex.value = index
			}
			
			const rateNumber = ref(5)
			
			const commentLabelList = reactive([
				{
					name: '全部',
					total: 156,
				},
				{
					name: '最新',
					total: null,
				},
				{
					name: '好评',
					total: 135,
				},
				{
					name: '差评',
					total: 14,
				},
				{
					name: '有图评价',
					total: 43,
				},
				{
					name: '商家回复',
					total: 6,
				},
				{
					name: '味道赞',
					total: 15,
				},
				{
					name: '推荐',
					total: 3,
				},
			])
			
			const commentLabelCurrent = ref(0);
			const commentList = reactive([,,,,,,])
			
			const classifyListData = reactive(classifyList);
			const goodsListData = reactive(goodsList)
			const scrollId = ref('');
			const value = ref(0);
			const tabPosition = ref('relative');

			// 商品购买列表
			const payforGoodsList = reactive([]);
			const payforNum = ref(0);
			const payforTotal = ref(0);
			const parforGapPrice = ref(20);
			const payforIsok = ref(false);
			// console.log(goodsListData, 'goodsListData')
			
			
			// 评论标签change
			const changeCommentLabel = (index) => {
				console.log(index, commentList)
				if(commentLabelCurrent.value !== index) {
					commentLabelCurrent.value = index
					
					uni.showLoading({
						title: '加载中'
					});
					
					commentList.length = 0;
					
					setTimeout(() => {
						commentList.length = 6;
						uni.hideLoading()
					}, 500)
				}
			}
			// 锚点
			const changeScrollId = v => {
				console.log(v);
				scrollId.value = v;
			}

			const numInputChange = (e, v) => {
				const hasGoodsindex = payforGoodsList.findIndex(data => data.id === v.id);
				const num = e.value;
				if(hasGoodsindex === -1){
					payforGoodsList.push({
						...v,
						payNum: num,
					})
				}else {
					if(num === 0) {
						return payforGoodsList.splice(hasGoodsindex, 1)
					}
					payforGoodsList[hasGoodsindex] = {
						...v,
						payNum: num,
					}
				}
				// console.log(e, 'e-----------')
				// console.log(payforGoodsList, 'payforGoodsList-----------')
			}
			
			
			watch(payforGoodsList, (val, oldVal) => {
				console.log(val, 'watch')
				let num = 0,
					total = 0;
				
				if(val.length > 0) {
					val.map(v => {
						num += v.payNum;
						const price = formatFloat(v.price * v.payNum, 2)
						total = formatFloat(total + price, 2);
					})
					payforNum.value = num;
					payforTotal.value = total;
					payforIsok.value = formatFloat(total - 20,2) >= 0 ? true : false;
					console.log(payforIsok, 'payforIsok')
					parforGapPrice.value = Math.abs(formatFloat(total - 20,2));
				}else {
					payforNum.value = 0;
					payforTotal.value = 0;
					payforIsok.value = false;
					parforGapPrice.value = 20;
				}
			}, {
				deep: true
			})
			
			onMounted(() => {
				const pages = getCurrentPages()
				const page = pages[pages.length - 1]
				console.log(page, 'page')
				const pageTitle = page.$page.options.title;
				storeName.value = pageTitle;
			})
			// onPageScroll((e) => {  
			//    const scrollTop = e.scrollTop;
			//    // console.log(scrollTop, 'scrollTop')
			//    if (scrollTop > 200) {
			// 	tabPosition.value = 'absolute';
			//    } else {
			// 	tabPosition.value = 'relative';
			//    } 
			// });  
			
			const jumpOrderView = () => {
				uni.setStorageSync('parforGoodList', {
					storeName,
					payforGoodsList,
					payforTotal,
				});
				
				uni.navigateTo({
					url: '/pages/order/order'
				})
			}

			return {
				tabList,
				classifyListData,
				goodsListData,
				scrollId,
				changeScrollId,
				value,
				tabPosition,
				payforGoodsList,
				payforNum,
				payforTotal,
				parforGapPrice,
				payforIsok,
				numInputChange,
				jumpOrderView,
				storeName,
				tabIndex,
				tabChange,
				rateNumber,
				commentLabelList,
				commentLabelCurrent,
				changeCommentLabel,
				commentList,
			}
		},
		onLoad(options) {
			const {
				title = ''
			} = options;
			uni.setNavigationBarTitle({
				title,
			})
		},
		
	}
</script>

<style lang="scss" scoped>
	.storeDetils-view {
		.number-input {
			transform: scale(0.8);
		}

		.scroll-Y {
			height: 100%;
		}

		.store-bg {
			height: 300rpx;
			background: #ccc url('../../static/images/store_bg.jpg') no-repeat scroll top/contain;

			&::after {
				content: "";
				width: 100%;
				height: 100%;
				position: absolute;
				left: 0;
				top: 0;
				background: inherit;
				-webkit-filter: blur(3px);
				filter: blur(3px);
			}
		}

		.store-info {
			position: relative;
			z-index: 100;
			margin-top: -60rpx;

			.store-top {
				position: relative;
				width: 100%;
				padding: 24rpx 32rpx;
				box-sizing: border-box;
				background: white;
				border-radius: 3.2vw 3.2vw 0 0;
			}

			.store-img {
				position: absolute;
				top: -30rpx;
				right: 30rpx;
				width: 130rpx;
				height: 130rpx;
			}

			.store-title {
				display: block;
				font-weight: 600;
				font-size: 44rpx;
				color: #222426;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				font-family: "PingFangSC-Regular", Hiragino Sans GB, Arial, Helvetica, "宋体", sans-serif;
			}

			.subtitle {
				.start {
					margin-right: 16rpx;
					font-weight: 500;
					font-size: 24rpx;
					color: #FF8000;
				}

				.delivery-time {
					font-size: 24rpx;
					color: #858687;
				}
			}

			.preferential {
				margin-top: 12rpx;

				.preferential-label {
					display: inline-flex;
					justify-content: center;
					align-items: center;
					color: #fb4e44;
					padding: 0 14rpx;
					margin-bottom: 14rpx;
					margin-right: 14rpx;
					height: 32rpx;
					line-height: 32rpx;
					border: 1px solid #fb4e44;
					font-size: 20rpx;
					box-sizing: border-box;
					border-radius: 4rpx;
				}
			}
		}

		.tabs {
			background-color: #fff;

			&.tab-rel {
				position: relative;
				z-index: 2;
			}

			&.tab-abs {
				position: fixed;
				top: 88rpx;
				width: 100%;
				background-color: #fff;
				z-index: 100;
			}
		}

		.tab-view {
			position: relative;
			height: calc(100vh - 88px);
			background-color: #fff;

			.store-goods {
				height: 100%;
				overflow: hidden;
				display: flex;

				.goods-left {
					padding-bottom: 100rpx;
					width: 160rpx;
					min-width: 160rpx;
					height: 100%;
					overflow-y: auto;
				}

				.goods-classify {
					display: flex;
					align-items: center;
					justify-content: center;
					padding: 32rpx;

					.classify-icon {
						min-width: 30rpx;
						width: 30rpx;
						height: 30rpx;
						border: 1px solid #000;
						margin-right: 6rpx;
						box-sizing: border-box;
						vertical-align: text-top;
					}

					.classify-text {
						font-size: 24rpx;
						line-height: 30rpx;
						color: #666666;
					}
				}

				.goods-right {
					padding-bottom: 20rpx;
					width: 100%;
					height: 100%;
					overflow-y: auto;
				}

				.goods-list-warrper {
					.goods-group {}

					.list-title {
						font-size: 28rpx;
						line-height: 48rpx;
						color: #222426;
						padding: 20rpx 16px 26rpx;
					}

					.goods-item {
						display: flex;
						margin-bottom: 56rpx;
						padding: 0 32rpx 0 16rpx;

						.goods-cover {
							min-width: 190rpx;
							width: 190rpx;
							height: 190rpx;
							margin-right: 16rpx;
						}

						.goods-content {}

						.goods-title {
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-line-clamp: 2;
							overflow: hidden;
							-webkit-box-orient: vertical;
							font-size: 4.26666667vw;
							font-weight: 600;
							color: #222426;
							line-height: 40rpx;
							margin-bottom: 12rpx;
							font-family: "PingFangSC-Regular", Hiragino Sans GB, Arial, Helvetica, "宋体", sans-serif;
						}

						.goods-subtitle {
							.weight-num {
								font-size: 2.93333333vw;
								line-height: 4.26666667vw;
								height: 4.26666667vw;
								padding: 0 1.06666667vw;
								display: inline-block;
								border-radius: 1.06666667vw;
								background: #F5F5F6;
								margin-right: 0.53333333vw;
							}

							.profile {
								line-height: 3.73333333vw;
								font-size: 2.93333333vw;
								color: #222426;
							}
						}

						.saleNum {
							font-size: 2.93333333vw;
							color: #858687;
							line-height: 3.73333333vw;
							margin-right: 2.13333333vw;
						}

						.bottom {
							display: flex;
							justify-content: space-between;

							.price {
								margin-top: 12rpx;
								color: #FF4A26;
								line-height: 5.33333333vw;
								display: inline-block;
								font-weight: 500;
								font-size: 4.26666667vw;
							}
						}
					}
				}
			}
		}

		.place-order-btn {
			position: fixed;
			bottom: 60rpx;
			width: 100%;
			z-index: 110;
			padding: 0 24rpx;
			box-sizing: border-box;

			.btn-warrper {
				box-sizing: border-box;
				display: flex;
				justify-content: space-between;
				align-items: center;
				width: 100%;
				background: #222426;
				border-radius: 6.66666667vw;
				display: -webkit-flex;
				display: flex;
				-webkit-align-items: center;
				align-items: center;
				color: #858687;
				height: 13.33333333vw;
				padding: 0 0 0 24rpx;

				.palce-num {
					margin-right: 20rpx;
					max-width: 136rpx;
					height: 36rpx;
					padding: 8rpx 16rpx;
					background-color: rgb(248, 199, 78);
					border-radius: 12rpx;
					font-size: 24rpx;
					color: #233;
				}

				.place-info {
					display: flex;
					align-items: center;
					box-sizing: border-box;
					height: 100%;
					;

					.place-price {
						display: block;
						font-size: 5.86666667vw;
						color: #fff;
						margin-right: 1.33333333vw;
					}

					.distribution-price {
						display: block;
						font-size: 2.93333333vw;
						height: 48rpx;
						color: #858687;
					}

					.total {
						height: 100%;
					}
				}

				.star-price {
					padding-right: 24rpx;
					font-size: 3.73333333vw;
					font-weight: 500;
					padding: 0 3.2vw;
					line-height: 13.33333333vw;
					color: #FFFFFF;
				}
				.payfor-btn {
					font-weight: 500;
					font-size: 3.73333333vw;
					color: #222426;
					height: 13.33333333vw;
					line-height: 13.33333333vw;
					background: #f8c74e;
					background-image: linear-gradient(
					135deg
					, #FFDD33 0%, #FFBB33 100%);
					border-radius: 0 6vw 6vw 0;
					width: 22.4vw;
					position: relative;
					display: -webkit-flex;
					display: flex;
					-webkit-justify-content: center;
					justify-content: center;
				}
			}
		}
		.store-comment {
			background-color: #f5f5f5;
			.store-rate {
				display: flex;
				justify-content: space-between;
				padding: 40rpx 0 30rpx;
				background-color: #fff;
				margin-bottom: 20rpx;
				.rate-left {
					display: flex;
					align-items: flex-end;
					padding-left: 60rpx;
					.rate-num {
						margin-right: 2.66666667vw;
						margin-bottom: -1.6vw;
						font-size: 8.53333333vw;
						color: #FF8000;
					}
					.rate-box {
						.rate-title {
							font-size: 3.2vw;
							color: #858687;
							font-family: "PingFangSC-Regular",Hiragino Sans GB,Arial,Helvetica,"宋体",sans-serif;
						}
					}
				}
				.rate-label {
					display: flex;
					padding-right: 32rpx;
					.rate-margin {
						margin-left: 6.66666667vw;
						margin-right: 10.66666667vw;
					}
					.label-name {
						font-size: 3.2vw;
						color: #858687;
					}
					.lable-num {
						display: block;
						margin-top: 2.13333333vw;
						font-size: 4.26666667vw;
						font-weight: 500;
						color: #222426;
					}
				}
			}
		
			.comment-label {
				padding: 3.2vw 3.2vw 0;
				background: #fff;
				margin-top: 2.13333333vw;
				color: #666;
				.label-item {
					display: inline-block;
					vertical-align: middle;
					padding: 0 2.66666667vw;
					height: 7.46666667vw;
					line-height: 7.46666667vw;
					margin: 2.13333333vw 1.06666667vw 0;
					background: #FFF8E1;
					font-size: 3.2vw;
					color: #222426;
					text-align: center;
					border-radius: 1.06666667vw;
					&.active {
						background: #fc3;
						color: #222426;
					}
					.lable-name {
						
					}
					.label-num {
						
					}
				}
			}
			
		}
		.comment-list {
			background-color: #fff;
			padding: 0 4vw;
			.comment-item {
				padding: 5.33333333vw 0 4.26666667vw 0;
				.comment-header {
					display: flex;
					justify-content: space-between;
					.header-left {
						display: flex;
						.user-cover {
							width: 9.6vw;
							height: 9.6vw;
							border-radius: 50%;
							margin-right: 2.13333333vw;
						}
						.rate-wrrper {
							display: flex;
							.rate-text {
								color: rgb(133, 134, 135);
								font-size: 2.93333vw;
								margin-left: 1.33333vw;
							}
						}
						.user-name {
							color: #33322E;
							font-size: 3.73333333vw;
						}
					}
					.time {
						font-size: 3.2vw;
						color: #898989;
					}
				}
			
				.comment-content {
					.comment-body {
						font-size: 3.73333333vw;
						line-height: 5.33333333vw;
						color: #2f2f2f;
						padding-top: 3.73333333vw;
						padding-bottom: 2.13333333vw;
					}
					.comment-pictrue {
						margin-bottom: 1.06666667vw;
						display: flex;
						flex-wrap: wrap;
						.pictrue-item-warrper {
							// flex: 28.86666667vw 0 28.86666667vw;
							margin-right: 2.15066667vw;
							margin-bottom: 2.15066667vw;
							width: 27.86666667vw;
							height: 27.86666667vw;
							overflow: hidden;
							.pictrue-item {
								width: 100%;
								height: 100%;
								border-radius: 1.6vw;
							}
						}
					}
				}
			}
		}
		.detail-list {
			overflow: hidden;
			.detail-item {
				background: white;
				color: #333;
				padding: 0  30rpx;
				align-items: flex-start;
				display: flex;
				margin: 36rpx 0;
				.detail-icon {
					font-size: 28rpx;
				}
				.detail-title {
					word-wrap: break-word;
					font-size: 28rpx;
					line-height: 46rpx;
					padding-left: 12rpx;
					font-family: "PingFangSC-Regular",Hiragino Sans GB,Arial,Helvetica,"宋体",sans-serif;
					    font-size: 14px;
				}
			}
		}
	}
</style>
