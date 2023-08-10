<template>
	<view class="pages-home">
		<view class="content">
			<Header />
			<view class="advert">
				<image 
					src="../../static/images/swiper_1.jpg" 
					height="100rpx" 
					mode="scaleToFill" 
					class="advert-img"
				>
				</image>
			</view>
			<view class="home-menu">
				<view class="menu-item" v-for="(item, k) in menuList" :key="k" @click="jumpGoods">
					<image 
						:src="`../../static/images/menu_${k+1}.png`" 
						class="menu-icon"
						width="84rpx"
						height="84rpx" 
					>
					</image>
					<text class="menu-text">{{ item.text }}</text> 
				</view>
			</view>
			<view class="home-recomend">
				<text class="recomend-title">猜你喜欢 </text>
				<view class="recomend-list">
					<RecomendList :data="recommendData"/>
				</view>
			</view>
		</view>
	</view>
</template>
<script setup>
// import { defineComponent } from 'vue';
import img from "@/static/images/advert.jpg"
import Header from '@/components/header.vue'
import RecomendList from '@/components/recomendList.vue'
import { reactive, toRefs } from "vue";
import { menuList as  menuLists, recommendList } from '@/const/goods.js'

const state = reactive({
	title: 'Hello',
	menuList: menuLists,
	recommendData: recommendList
})

const { title,  menuList, recommendData } = toRefs(state)

function jumpGoods() {
	uni.navigateTo({
		url: '/pages/store/list'
	})
}
</script>

<style lang="scss" scoped>
.pages-home {
	background: #f6f7fa;
}	
	
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.logo {
	height: 200rpx;
	width: 200rpx;
	margin-top: 200rpx;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 50rpx;
}

.text-area {
	display: flex;
	justify-content: center;
}

.title {
	font-size: 36rpx;
	color: #8f8f94;
}
.advert {
	width: 100%;
}
.advert-img {
	width: 100%;
	height: 200rpx;
}
.home-menu {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	padding: 20rpx 20rpx 0;
	margin-bottom: 40rpx;
	background-color: #fff;
	.menu-item {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		flex: 1 1 25%;
		text-align: center;
		margin-bottom: 20rpx;
		.menu-icon {
			width: 84rpx;
			height: 84rpx;
		}
		.menu-text {
			min-width: 100%;
		}
	}
}

.home-recomend {
	width: 100%;
	background-color: #fff;
	padding: 28rpx 20rpx 60rpx;
	.recomend-title {
		padding: 0 20rpx;
		font-size: 32rpx;
		line-height: 40rpx;
		font-weight: 600;
	}
	.recomend-list {
		margin-top: 20rpx;
		padding: 0 20rpx;
	}
}
</style>
