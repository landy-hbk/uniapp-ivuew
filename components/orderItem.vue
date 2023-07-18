<template>
	<view class="com-orderItem">
		<view class="shop-info">
			<view class="shop-warrper">
				<image src="../static/images/store_cover.png" mode="widthFix" class="shop-img"></image>
				<text class="shop-name">牛千味（手撕鸡牛肉饭）</text>
			</view>
			<text class="order-status">已完成</text>
		</view>
		<view class="goods-info">
			<view class="goods-left">
				<image src="../static/images/good_8.jpg" mode="" class="goods-img"></image>
				<view class="goods-name">
					<text class="">招牌手撕鸡+火腿炒蛋+米饭+冬瓜茶</text>
				</view>
			</view>
			<view class="goods-right">
				<text class="goods-price">￥2.9</text>
				<text class="goods-num">共 1 件</text>
			</view>
		</view>
		
		<view class="bottom-warrper">
			<button class="order-btn">售后详情</button>
		</view>
	</view>
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
.com-orderItem {
	padding: 30rpx 20rpx;
	margin-bottom: 20rpx;
	background-color: #fff;
	border-radius: 16rpx;
	overflow: hidden;
	.shop-info {
		display: flex;
		justify-content: space-between;
		align-items: center;
		.shop-warrper {
			display: flex;
			align-items: center;
			.shop-img {
				width: 80rpx;
				height: 80rpx;
				border-radius: 4px;
			}
			.shop-name {
				padding-left: 20rpx;
				font-size: 28rpx;
				font-weight: 600;
			}
		}
		.order-status {
			font-size: 26rpx;
			color: #ffcc33;
			font-weight: 600;
			font-family: "PingFangSC-Regular", Hiragino Sans GB, Arial, Helvetica, "宋体", sans-serif;
		}
	}
	.goods-info {
		margin-top: 20rpx;
		display: flex;
		.goods-left {
			display: flex;
			align-items: center;
			padding-right: 60rpx;
			.goods-img {
				width: 190rpx;
				height: 95rpx;
				border-radius: 6px;
			}
			.goods-name {
				font-size: 24rpx;
				padding-left: 20rpx;
				color: #816060;
				font-weight: 600;
				font-family: "PingFangSC-Regular", Hiragino Sans GB, Arial, Helvetica, "宋体", sans-serif;
				line-height: 30rpx;
			}
		}
		.goods-right {
			display: flex;
			justify-content: flex-end;
			flex-wrap: wrap;
			flex-direction: column;
			.goods-price {
				white-space: nowrap;
				font-size: 26rpx;
				display: block;
				font-weight: bold;
				font-family: "PingFangSC-Regular", Hiragino Sans GB, Arial, Helvetica, "宋体", sans-serif;
			}
			.goods-num {
				padding-top: 4rpx;
				white-space: nowrap;
				display: block;
				font-size: 24rpx;
				color: #5d5d5d;
			}
		}
	}
	
	.bottom-warrper {
		padding-top: 40rpx;
		text-align: right;
		.order-btn {
			display: inline-block;
			width: 160rpx;
			height: 64rpx;
			background: #f8c74e;
			background-image: linear-gradient(135deg, #FFDD33 0%, #FFBB33 100%);
			border-radius: 6rpx;
			font-size: 24rpx;
		}
	}
}
</style>