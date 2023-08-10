<template>
	<view class="goodsList-view">
		<view class="search-warrper">
			<u-search placeholder="请输入商家名字或者商品名称" v-model="searchText"></u-search>
		</view>
		<view class="swiper-warrper">
			<swiper class="swiper" circular :autoplay="true">
				<swiper-item v-for="(v, k) in [, , ,]" :key="k">
					<image class="swiper-img" :src="`../../static/images/swiper_${k + 1}.jpg`" />
				</swiper-item>
			</swiper>
		</view>
		<view class="search-box">
			<view class="search-type">
				<view 
					:class="{
						'type-item': true,
						'active': goodsTypeCurrentList === item.title ? true : false
					}" 
					v-for="(item, k) in goodsTypeList" 
					:key="k"
					@click="changeGoodstype(item.title)"
				>
					<image :src="`../../static/images/type_${k + 1}.png`" class="type-img" />
					<text class="type-text">{{ item.title }}</text>
				</view>
			</view>
			<view class="sort-search">
				<text class="sort-text" @click="showSort">{{ sorText }}</text>
				<!-- <u-picker :show="goodsSortShow" :columns="sortList" @confirm="selectSort" @cancel="showSort(false)"></u-picker> -->
			</view>
			<view class="search-label">
				<text 
					:class="{
						'label-item': true,
						'active': labelCurrentList.includes(v)
					}"
					v-for="(v, index) in labelList" 
					:key="v+index"
					@click="changeLabel(v)"
				>
					{{v}}
				</text>
			</view>
		</view>
		<view class="goods-warrper">
			<RecomendList :data="goodsList" :goodsClick="goodsClick" key="k" />
		</view>
		<FooterNav />
	</view>
</template>

<script>
import { ref, reactive, toRefs } from 'vue';
import RecomendList from '@/components/recomendList.vue'
import FooterNav from '@/components/footerNav.vue'
import { recommendList } from '@/const/goods.js'

export default {
	setup() {
		const searchText = ref('');
		const goodsTypeList = reactive([
			{
				title: '全部'
			},
			{
				title: '饺子馄饨'
			},
			{
				title: '韩国料理'
			},
			{
				title: '粥粉面馆'
			},
			{
				title: '江浙菜系'
			},
			{
				title: '口味川湘'
			}
		]);
		const goodsTypeCurrentList = ref('')
		const state = reactive({
			labelList: ["点评高分", "优惠商家", "满减优惠", "品牌商家"],
			labelCurrentList: [],
			
		})

		const goodsSortShow = ref(false);
		const sortList = reactive([['综合排序', '销量优先', '距离优先', '速度优先', '评分优先', '起送价最低', '配送费最低', '人均高到低', '人均低到高']])

		const sorText = ref('综合排序');

		const showSort = (status) => {
			goodsSortShow.value = status;
		}

		const selectSort = (e) => {
			const val = e.value[0];
			sorText.value = val;
			showSort(false);
			console.log(e)

		};

		const goodsList = reactive(recommendList);
		
		const goodsClick = (e) => {
			const { title } = e;
			uni.navigateTo({
				url: `/pages/store/storeDetails?title=${title}`
			})
		}
		// label点击事件
		const changeLabel = (v) => {
			let { labelCurrentList } = state;
			if(labelCurrentList.includes(v)) {
				const index = labelCurrentList.findIndex((item) => item === v)
				labelCurrentList.splice(index, 1)
				
			} else {
				labelCurrentList.push(v)
			}
		}
		
		// type
		const changeGoodstype = (v) => {
			goodsTypeCurrentList.value = v;
			
			console.log(goodsTypeCurrentList.value, 'goodsTypeCurrentList')
		}

		return {
			searchText,
			goodsTypeList,
			goodsTypeCurrentList,
			changeGoodstype,
			goodsSortShow,
			sortList,
			showSort,
			selectSort,
			sorText,
			goodsList,
			goodsClick,
			changeLabel,
			...toRefs(state),
		}

	},
	components: {
		RecomendList,
		FooterNav
	}
};
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
		background: #ffcc33;
	}
	.search-box {
		padding: 0 24rpx;
	}
	.search-type {
		margin-top: 20rpx;
		padding: 10rpx 0;
		white-space: nowrap;
		overflow-x: auto;
		background-color: #fff;
		.type-item {
			width: 144rpx;
			display: inline-flex;
			flex-wrap: wrap;
			&.active {
				.type-img {
					background: rgba(197, 243, 124, .4);
					border-radius: 50%;
				}
				.type-text {
					color: #f60;
					font-weight: 600;
				}
			}
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
				font-size: 26rpx;
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
			&.active {
				background-color: #ffd000;
			}
		}
	}
	.goods-warrper {
		margin: 40rpx 24rpx 0;
		background-color: #fff;
	}
}
</style>