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
<script>
// import { defineComponent } from 'vue';
import img from "@/static/images/advert.jpg"
import Header from '@/components/header.vue'
import RecomendList from '@/components/recomendList.vue'

export default {
	components: {
		Header,
		RecomendList,
		// Headers:  defineComponent(() => import('@/components/header.vue')),
		// RecomendList:  defineComponent(() => import('@/components/recomendList.vue'))
	},
	data() {
		return {
			title: 'Hello',
			img: img,
			menuList: [{
				text: '美食',
			}, {
				text: '猫眼电影',
			}, {
				text: '酒店',
			}, {
				text: '休闲娱乐',
			}, {
				text: 'ktv',
			}, {
				text: '周边游',
			}, {
				text: '丽人',
			}, {
				text: '母婴',
			}],
			recommendData: [{
				title: '蜜雪冰城',
				label: '[多城市]招牌柠檬水',
				price: 3.6,
				img: "../../static/images/good_1.jpg", 
				market_price: 12,
			},{
				title: '茶百道',
				label: '[多城市]爆品-冷萃茶 2 选 1',
				price: 6.6,
				img: "../../static/images/good_2.jpg", 
				market_price: 15,
			},{
				title: '川锅汇·火锅·烤肉自助回转餐厅',
				label: '[北京路商业区]火锅+烤肉自助餐',
				price: 45,
				img: "../../static/images/good_3.jpg", 
				market_price: 98,
			},{
				title: '华莱士·全鸡汉堡',
				label: '[多城市]开学季双人餐',
				price: 16.8,
				img: "../../static/images/good_4.jpg", 
				market_price: 32.5,
			},{
				title: '正點煌·纯手作茶点',
				label: '[北京路商业区]扇鸡咕咾肉甜品双人餐',
				price: 128,
				img: "../../static/images/good_5.jpg", 
				market_price: 256,
			},{
				title: '胜记饭店順德农家菜',
				label: '[钟村]2-3 人海鲜大丰收套餐',
				price: 96,
				img: "../../static/images/good_6.jpg", 
				market_price: 188,
			},{
				title: '桃沏·鲜果轻饮',
				label: '[龙洞/岑村]爆浆系列 2 选 1',
				price: 6.9,
				img: "../../static/images/good_7.jpg", 
				market_price: 13,
			},{
				title: '番佬掂·劲脆烧肉',
				label: '[5店通用]单人烧鸭饭',
				price: 9.9,
				img: "../../static/images/good_8.jpg", 
				market_price: 23,
			}]
		}
	},
	onLoad() {

	},
	methods: {
		jumpGoods() {
			uni.navigateTo({
				url: '/pages/goods/list'
			})
		},
	}
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
		font-size: 32rpx;
		line-height: 40rpx;
		font-weight: 600;
	}
	.recomend-list {
		margin-top: 20rpx;
	}
}
</style>
