<template>
	<view class="goodsList-view">
		<view class="search-warrper">
			<u-search placeholder="请输入商家名字或者商品名称" v-model="searchText"></u-search>
		</view>
		<view class="swiper-warrper">
			<swiper class="swiper" circular  :autoplay="true" >
				<swiper-item v-for="(v, k) in [,,,]" :key="k">
					<image class="swiper-img"  :src="`../../static/images/swiper_${k+1}.jpg`" />
				</swiper-item>
			</swiper>
		</view>
		<view class="search-box">
			<view class="search-type">
				<view class="type-item" v-for="(item, k) in goodsTypeList" :key="k">
					<image :src="`../../static/images/type_${k+1}.png`" class="type-img" /> 
					<text class="type-text">{{ item.title }}</text>
				</view>
			</view>
			<view class="sort-search">
				<text class="sort-text" @click="showSort">{{ sorText }}</text>
				<!-- <u-picker :show="goodsSortShow" :columns="sortList" @confirm="selectSort" @cancel="showSort(false)"></u-picker> -->
			</view>
			<view class="search-label">
				<text class="label-item">点评高分</text>
				<text class="label-item">优惠商家</text>
				<text class="label-item">满减优惠</text>
				<text class="label-item">品牌商家</text>
			</view>
		</view>
		<view class="goods-warrper">
			<RecomendList :data="goodsList" :goodsClick="goodsClick" key="k"/>
		</view>
		<FooterNav />
	</view>
</template>

<script>
import { ref, reactive } from 'vue'
import RecomendList from '@/components/recomendList.vue'
import FooterNav from '@/components/footerNav.vue'
	
export default {
	setup() {
		const searchText = ref('');
		const goodsTypeList = reactive([
			{
				title: '全部',
			},
			{
				title: '饺子馄饨',
			},
			{
				title: '韩国料理',
			},
			{
				title: '粥粉面馆',
			},
			{
				title: '江浙菜系',
			},
			{
				title: '口味川湘',
			}
		])
		
		const goodsSortShow = ref(false);
		const sortList = reactive([[
			"综合排序", 
			"销量优先",
			"距离优先",
			"速度优先",
			"评分优先",
			"起送价最低",
			"配送费最低",
			"人均高到低",
			"人均低到高",
		]])
		const sorText = ref('综合排序');
		
		const showSort = status => {
			goodsSortShow.value = status;
		}
		const selectSort = e => {
			const val = e.value[0];
			sorText.value = val;
			showSort(false)
			console.log(e)
		}
		
		const goodsList = reactive([{
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
			}])
		const goodsClick = (e) => {
			const { title }  = e;
			uni.navigateTo({
				url: `/pages/goods/storeDetails?title=${title}`,
			})
		}
		return {
			searchText,
			goodsTypeList,
			goodsSortShow,
			sortList,
			showSort,
			selectSort,
			sorText,
			goodsList,
			goodsClick,
		}
	},
	components: {
		RecomendList,
		FooterNav,
	},
}
</script>

<style lang="scss" scoped>
.goodsList-view {
	min-height: 100vh;
	background-color: rgb(245, 245, 246);
	padding-bottom: 120rpx;
	.swiper-warrper {
		.swiper {
			height: 300rpx;
		}
		.swiper-img {
			width: 100%;
			height: 100%;
		}
	}
	.search-warrper {
		padding: 12rpx 24rpx;
		background: #FFCC33;
	}
	.search-box {
		padding: 0 24rpx;
	}
	.search-type {
		margin-top: 20rpx;
		white-space: nowrap;
		overflow-x: auto;
		background-color: #fff;
		.type-item {
			width: 144rpx;
			display: inline-flex;
			flex-wrap: wrap;
			.type-img {
				display: block;
				margin: 0 28rpx;
				width: 90rpx;
				height: 90rpx;
			}
			.type-text {
				width: 100%;
				margin-top: 4rpx;
				text-align: center;
				font-weight: 500;
				color: #333;
				font-size: 14px;
			}
		}
	}
	.sort-search {
		margin-top: 20rpx;
		.sort-text {
			font-size: 12px;
			color: #222426;
			text-align: center;
			line-height: 28px;
			font-weight: 600;
		}
	}
	.search-label {
		margin-top: 20rpx;
		display: flex;
		justify-content: space-between;
		.label-item {
			width: 140rpx;
			height: 50rpx;
			border-radius: 12rpx;
			overflow: hidden;
			display: -webkit-flex;
			display: flex;
			justify-content: center;
			-webkit-align-items: center;
			align-items: center;
			background-color: #fff;
			position: relative;
			font-size: 24rpx;
			color: #575859;
			text-align: center;
		}
	}
	.goods-warrper {
		margin: 40rpx 24rpx 0;
		background-color: #fff;
	}
}
</style>