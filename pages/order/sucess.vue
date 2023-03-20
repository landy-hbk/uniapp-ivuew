<template>
	<view class="order-sucess">
		<view class="sucess-content">
			<image src="../../static/logo.png" mode="" class="sucess-img"></image>
			<view class="sucess-text">
				恭喜您，下单支付成功。
			</view>
			<view class="back-btn" @click="jumpHome">
				返回首页
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		setup() {
			const jumpHome = () => {
				uni.navigateTo({
					url: '/pages/index/index'
				})
			}
			
			return {
				jumpHome,
			}
		}
	}
</script>

<style lang="scss" scoped>
	.order-sucess {
		.sucess-content {
			margin-top: 240rpx;
			text-align: center;
			.sucess-img {
				width: 160rpx;
				height: 160rpx;
			}
			.sucess-text {
				margin-top: 24rpx;
				font-size: 38rpx;
			}
			.back-btn {
				height: 100rpx;
				width: 80%;
				margin: 40rpx auto 0;
				background-color: #f8c74e;
				font-size: 16px;
				font-weight: bold;
				color: #333;
				line-height: 100rpx;
				border-radius: 48rpx;
			}
		}
	}
</style>