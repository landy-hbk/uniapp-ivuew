<template>
	<view class="page-userCenter">
		<view class="user-warrper">
			<image src="../../../static/images/user_default.png"  class="avatar" ></image>
			<view class="user-info">
				<view class="user-name">
					<text class="name">爱上可</text>
					<image src="../../../static/images/level_3.png" mode="heightFix" class="user-level"></image>
				</view>
				<text class="user-money">账户余额：<text class="font-red">0</text> 元</text>
			</view>
		</view>
		
		<view class="order-module">
			<view class="order-header">
				<image src="../../../static/images/user_menu_1.png" alt="" class="header-icon" ></image>
				<text class="title">全部订单</text>
			</view>
			<view class="order-entry">
				<view class="entry-item" v-for="(v, k) in orderEnterList" :key="v.name">
					<image :src="`../../../static/images/order_icon_${k+1}.png`" mode="heightFix" class="entry-icon"></image>
					<text class="entry-text">{{ v.name }}</text>
				</view>
			</view>
		</view>
		<view class="menu-list">
			<view class="menu-item" v-for="(v, k) in menuList" :key="v.name">
				<image :src="`../../../static/images/user_menu_${k+2}.png`" mode="widthFix" class="menu-icon"></image>
				<text class="menu-text">{{ v.name }}</text>
			</view>
			<view class="menu-item" @click="showSinModel">
				<image :src="`../../../static/images/user_menu_${2}.png`" mode="widthFix" class="menu-icon"></image>
				<text class="menu-text">退出</text>
			</view>
		</view>
		
		<u-modal :show="show" title="退出" content='您确认要退出用户登录?' :showCancelButton="true" @confirm="sinOut(true)" @cancel="sinOut(false)"></u-modal>
	</view>
</template>

<script>
	export default {
		data() {	
			return {
				show: false,
				orderEnterList: [
					{
						name: '待付款'
					},
					{
						name: '待使用'
					},
					{
						name: '待评价'
					},
					{
						name: '退款/售后'
					},
				],
				menuList: [
					{
						name: '我的收藏',
					},
					{
						name: '我的抵用券',
					},
					{
						name: '我的抽奖单',
					},
				]
			}
		},
		methods: {
			showSinModel() {
				this.show = true;
			},
			sinOut(btn) {
				if(btn) {
					uni.setStorageSync('userInfo', '');
					uni.navigateTo({
						url: '/pages/index/index'
					})
				}else {
					this.show = false;
				}
				
			},
		}
	}
</script>

<style scoped lang="scss">
.page-userCenter {
	background-color: #f5f5f5;
	min-height: 100vh;
	.user-warrper {
		display: flex;
		padding: 28rpx 20rpx 28rpx 40rpx ;
		background: #fff url('../../../static/images/my-photo.png') no-repeat scroll center/cover;
		.avatar {
			flex-shrink: 0;
			width: 120rpx;
			height: 120rpx;
		}
		.user-info {
			flex: 1 1;
			padding-left: 40rpx;
			.name {
				margin-right: 20rpx;
				margin-right: 2.7vw;
				font-size: 4vw;
				color: #333;
			}
			.user-level {
				height: 32rpx;
			}
			.user-money {
				margin-top: 3.5vw;
				font-size: 3.2vw;
				color: #666;
			}
			.font-red {
				color: #ff9712;
			}
		}
	}
	.order-module {
		background-color: #fff;
		margin-top: 2.7vw;
		.order-header {
			padding: 3.7vw 2.7vw;
			display: flex;
			align-items: center;
			.header-icon {
				width: 50rpx;
				height: 50rpx;
			}
			.title {
				padding-left: 24rpx;
				font-size: 3.7vw;
			}
		}
		.order-entry {
			border-top: .3vw solid #ddd8ce;
			padding: 3.7vw 0;
			display: flex;
			justify-content: space-between;
			.entry-item {
				flex: 1 1;
				text-align: center;
				.entry-icon {
					height: 8vw;
				}
				.entry-text {
					display: block;
					font-size: 28rpx;
				}
			}
		}
	}
	.menu-list {
		margin-top: 2.7vw;
		background-color: #fff;
		.menu-item {
			display: flex;
			align-items: center;
			padding: 3.7vw 2.7vw;
			border-bottom: .3vw solid #ddd8ce;
			.menu-icon {
				width: 6.7vw;
				flex-shrink: 0;
			}
			.menu-text {
				margin-left: 3.2vw;
				font-size: 32rpx;
			}
		}
	}
}
</style>
