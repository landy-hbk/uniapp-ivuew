<template>
	<view class="footer-nav">
		<view class="footer-nav-item" v-for="v in navList" :key="v.name" @click="jumpTo(v.url)">
			<image :src="v.icon" mode="widthFix" class="footer-nav-icon"></image>
			<text class="footer-nav-text">{{ v.name }}</text>
		</view>
	</view>
</template>

<script setup>
import homeIcon from '@/static/images/home.png'
import orderIcon from '@/static/images/order.png'
import userIcon from '@/static/images/user.png'
import { ref } from 'vue'
	const 	navList	 = ref(
		[
			{
				name: '首页',
				icon: homeIcon,
				url: '/pages/store/list'
			},
			{
				name: '订单',
				icon: orderIcon,
				url: '/pages/order/orderList'
			},
			{
				name: '用户中心',
				icon: userIcon,
				url: '/pages/user/index/index'
			},

		]
	)
	
	const jumpTo = (url) => {
		let routes = getCurrentPages();
		let curRoute = routes[routes.length - 1].route
		// 去除重复跳转
		if(url && url !== '/'+curRoute) {
			uni.navigateTo({
				url: url
			})
		}
	}

</script>

<style lang="scss" scoped>
.footer-nav {
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	display: flex;
	box-sizing: border-box;
	justify-content: space-between;
	padding: 10rpx 30rpx;
	background-color: #fff;
	.footer-nav-item {
		flex: 1 1;
		text-align: center;
		font-size: 0;
		cursor: pointer;
		.footer-nav-icon {
			width: 40rpx;
			height: 40rpx;
		}
		.footer-nav-text {
			padding-top: 6rpx;
			display: block;
			font-size: 26rpx;
			color: #8d8181;
		}
	}
}
</style>
