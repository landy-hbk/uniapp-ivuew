<template>
	<view class="order-view">
		<view class="address">
			<view class="user-address">
				广州市番禺区番禺万达中国科技大厦a栋17楼1708室
			</view>
			<view class="user-info">
				<text class="name">文森特</text>
				<text class="phone">19916060066</text>
			</view>
			<view class="address-subtitle">
				为降低风险，推荐使用无接触配送
			</view>
			<view class="address-time">
				<text class="time-text">立即送出</text>
				<text class="time-hour">(大约18:14送达)</text>
			</view>
		</view>
		<view class="order-goods">
			<view class="store-info">
				<text class="name">{{ storeName }}</text>
				<text class="label"></text>
			</view>
			<view class="order-goods-list">
				<view class="goods-item" v-for="(v, k) in payforGoodsList" :key="k">
					<image :src="v.img" mode="" class="goods-cover"></image>
					<view class="goods-info">
						<text class="title u-line-1">{{ v.title }}</text>
						<text class="subtitle  u-line-1">1人份 </text>
						<text class="pay-num  u-line-1">x{{ v.payNum }}</text>
					</view>
					<text class="total-price">¥{{ v.price }}</text>
				</view>
			</view>
			<view class="order-list-item">
				<text class="label">打包费</text>
				<text class="right-text">¥3</text>
			</view>
			<view class="order-list-item">
				<text class="label">配送费</text>
				<text class="right-text">¥3</text>
			</view>
		</view>
		<view class="preferential">
			<view class="order-list-item">
				<text class="label">店铺满减</text>
				<text class="right-text">¥0</text>
			</view>
			<view class="order-list-item">
				<text class="label">红包</text>
				<text class="right-text">无</text>
			</view>
			<view class="order-list-item">
				<text class="label">商家代金卷</text>
				<text class="right-text">无</text>
			</view>
			<view class="preferential-bottom">
				<text class="preferential-title">优惠规则</text>
				<text class="preferential-total">
					小计￥
					<text class="total-num">0.00</text>	
				</text>	
			</view>
		</view>
		<!-- <view class="">
			<view class="">
				<view class="">
					<text></text>
					<text></text>
				</view>
				<view class="">
					
				</view>
			</view>
		</view> -->
		<view class="order-other">
			<view class="order-list-item">
				<text class="label">餐具数量</text>
				<text class="right-text">请选择，默认为1人份</text>
			</view>
			<view class="order-list-item">
				<text class="label">备注</text>
				<text class="right-text">推荐使用无接触配送</text>
			</view>
			<view class="order-list-item">
				<text class="label">发票</text>
				<text class="right-text">暂不支持开发票</text>
			</view>
		</view>
		<view class="order-bottom">
			<view class="price">
				<text class="price-text">
					合计
					<text class="price-num">{{ payforTotal }}</text>
				</text>
			</view>
			<view class="order-submit" @click="jumpOrderSucess">
				提交订单
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
	export default {
		setup() {
			const storeData = uni.getStorageSync('parforGoodList');
			const storeName = ref(storeData.storeName._value || '');
			const payforGoodsList = ref(storeData.payforGoodsList || []);
			const payforTotal = ref(storeData.payforTotal._value || 0);
			// console.log(storeData.storeName._value, payforGoodsList, 'storeData')
			
			const jumpOrderSucess = () => {
				uni.navigateTo({
					url: '/pages/order/sucess'
				})
			}
			
			return {
				storeName,
				payforGoodsList,
				payforTotal,
				jumpOrderSucess,
			} 
		},
		
	}
</script>

<style lang="scss" scoped>
	.order-view {
		min-height: 100vh;		
		background-color: #f4f4f4;
		overflow: hidden;
		padding: 0 20rpx 140rpx;
		.address {
			margin-top: 5.33333333vw;
			margin-bottom: 1.33333333vw;
			background-color: #fff;
			padding: 5.33333333vw 3.2vw;
			border-radius: 3.2vw;
			.user-address {
				font-weight: 600;
				font-size: 4.8vw;
				color: #333333;
				margin-bottom: 1.6vw;
				height: 5.86666667vw;	
				line-height: 5.86666667vw;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				position: relative;
				font-family: "PingFangSC-Regular", Hiragino Sans GB, Arial, Helvetica, "宋体", sans-serif;
				&::after {
					content: '';
					position: absolute;
					background-image: url('../../static/images/right_icon.png');
					background-size: 3.2vw 3.2vw;
					width: 3.2vw;
					height: 3.2vw;
					top: 2.13333333vw;
					right: 0.6vw;
				}
			}
			.user-info {
				font-size: 3.73333333vw;
				color: #666666;
				letter-spacing: 0.15px;
				height: 5.33333333vw;
				.name {
					font-size: 3.73333333vw;
					color: #666666;
					margin-right: 4.26666667vw;
				}
				.phone {
					font-size: 3.73333333vw;
					color: #666666;
					font-family: "PingFangSC-Regular", Hiragino Sans GB, Arial, Helvetica, "宋体", sans-serif;
				}
			}
			.address-subtitle {
				font-size: 3.2vw;
				line-height: normal;
				color: #FF8000;
				letter-spacing: 0.34px;
				margin-top: 2.13333333vw;
			}
			.address-time {
				display: flex;
				-webkit-justify-content: space-between;
				justify-content: space-between;
				-webkit-align-items: center;
				align-items: center;
				padding-top: 5.33333333vw;
				padding-right: 7.46666667vw;
				.time-text {
					font-weight: 600;
					font-size: 3.73333333vw;
					color: #333333;
				}
				.time-hour {
					font-size: 3.73333333vw;
					color: #333333;
					letter-spacing: 0.04vw;
				}
			}
		}
		.order-goods {
			margin-top: 20rpx;
			border-radius: 3.2vw;
			background-color: #fff;
			overflow: hidden;
			.store-info {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0 4vw;
				color: #999999;
				height: 13.33333333vw;
				background-color: #fff;
				box-sizing: border-box;
				.name {
					vertical-align: top;
					display: inline-block;
					margin-left: 12px;
					height: 100%;
					line-height: 50px;
					margin-top: 1px;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					font-size: 14px;
					color: #666;
					max-width: 70%;
				}
				.label {
					display: inline-block;
					height: 4vw;
					width: 13.33333333vw;
					font-size: 2.66666667vw;
					color: #333;
					box-sizing: border-box;						border: 1px solid #000;
					background: url('../../static/images/peisong_icon.png') no-repeat scroll top/cover
				}
			}
			.order-goods-list {
				.goods-item {
					margin-bottom: 5px;
					padding: 10px;
					box-sizing: border-box;
					height: 75px;
					width: 100%;
					background-color: #F8F8F8;
					display: -webkit-flex;
					display: flex;
					.goods-cover {
						object-fit: cover;
						height: 110rpx;
						width: 110rpx;
						border: 1px solid #000;
					}
					.goods-info {
						flex: 1 1;
						padding-left: 20rpx;
						.title {
							display: block;
							font-size: 14px;
							color: #333;
							font-family: "PingFangSC-Regular", Hiragino Sans GB, Arial, Helvetica, "宋体", sans-serif;
						}
						.subtitle { 
							display: block;
							font-size: 12px;
							line-height: 17px;
							margin: 7px 0;
							color: #999;
							font-family: "PingFangSC-Regular", Hiragino Sans GB, Arial, Helvetica, "宋体", sans-serif;
						}
						.pay-num {
							display: block;
							font-size: 12px;
							line-height: 17px;
							color: #999;
							font-family: "PingFangSC-Regular", Hiragino Sans GB, Arial, Helvetica, "宋体", sans-serif;
						}
					}
					.total-price {
						font-size: 14px;
						color: #333;
						font-family: "PingFangSC-Regular", Hiragino Sans GB, Arial, Helvetica, "宋体", sans-serif;
					}
				}
			}
		}
		.preferential {
			padding: 24rpx 0;
			margin-top: 20rpx;
			background-color: #fff;
			border-radius: 3.2vw;
			.order-list-item {
				position: relative;
				padding-right: 48rpx;
				&::after {
					margin-top: -5px;
					content: '';
					display: inline-block;
					height: 11px;
					width: 6px;
					background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAWBAMAAAAGFmApAAAAG1BMVEUAAACvr6+np6eurq6srKyurq6urq6np6evr6+aZHW7AAAACHRSTlMAzhHbG8S8HSeiSm4AAAAwSURBVAjXY0gsYACBDBMwpdjsAKKYJMjhNoIp51YQyWIhBOY0KhDPYZAAcxhCwRwAI1kNBzm+faIAAAAASUVORK5CYII=);
					background-repeat: no-repeat;
					background-size: 6px 11px;
					position: absolute;
					right: 24rpx;
					top: 47%;
				}
			}
			.preferential-bottom {
				height: 100rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0 20rpx;
				border-top: 1px dashed #ccc;
				.preferential-title {
					font-weight: 500;
					font-size: 3.2vw;
					color: #909191;
				}
				.preferential-total {
					font-size: 3.73333333vw;
					color: #111111;
					line-height: 5.33333333vw;
					font-family: "PingFangSC-Regular", "Hiragino Sans GB", Arial, Helvetica, "宋体", sans-serif;
					.total-num {
						font-size: 5.06666667vw;
						color: #333333;
					}
				}
			}
		}
		.order-other {
			padding: 24rpx 0;
			margin-top: 20rpx;
			background-color: #fff;
			border-radius: 3.2vw;
			.order-list-item {
				position: relative;
				padding-right: 48rpx;
				.right-text {
					font-size: 28rpx;
					color: #999;
				}
				&::after {
					margin-top: -5px;
					content: '';
					display: inline-block;
					height: 11px;
					width: 6px;
					background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAWBAMAAAAGFmApAAAAG1BMVEUAAACvr6+np6eurq6srKyurq6urq6np6evr6+aZHW7AAAACHRSTlMAzhHbG8S8HSeiSm4AAAAwSURBVAjXY0gsYACBDBMwpdjsAKKYJMjhNoIp51YQyWIhBOY0KhDPYZAAcxhCwRwAI1kNBzm+faIAAAAASUVORK5CYII=);
					background-repeat: no-repeat;
					background-size: 6px 11px;
					position: absolute;
					right: 24rpx;
					top: 47%;
				}
			}
		}
		
		.order-list-item {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 24rpx 20rpx;
			.label {
				font-size: 28rpx;
				color: #333;
				font-family: "PingFangSC-Regular", Hiragino Sans GB, Arial, Helvetica, "宋体", sans-serif;
			}
			.right-text {
				font-size: 28rpx;
				color: #333;
				font-family: "PingFangSC-Regular", Hiragino Sans GB, Arial, Helvetica, "宋体", sans-serif;
			}
		}
		.order-bottom {
			position: fixed;
			left: 0;
			bottom: 0;
			width: 100%;
			height: 100rpx;
			background-color: #fff;
			display: flex;
			.price {
				flex: 1;
				text-align: right;
				padding-right: 30rpx;
				.price-text {
					line-height: 100rpx;
					font-size: 32rpx;
					color: #333;
					font-family: "PingFangSC-Regular", "Hiragino Sans GB", Arial, Helvetica, "宋体", sans-serif;
				}
				.price-num {
					color: #FB4E44;
					font-style: normal;
					font-weight: bold;
				}
			}
			.order-submit {
				height: 100rpx;
				width: 125px;
				border-radius: 0;
				background-color: #f8c74e;
				font-size: 16px;
				font-weight: bold;
				color: #333;
				text-align: center;
				line-height: 100rpx;
			}
		}
	}
</style>