<template>
	<view class="page-orderList">
		<u-sticky offset-top="0">
			<view class="search-warrper">
				<u-search placeholder="请输入商家名字或者商品名称" v-model="searchText"></u-search>
			</view>
			<view class="order-panel">
				<u-tabs
					:list="tablist"
					:lineColor="`url(${lineBg}) 100% 100%`"
					:activeStyle="{
						color: '#303133',
						fontWeight: 'bold',
						transform: 'scale(1.05)'
					}"
					:inactiveStyle="{
						color: '#606266',
						transform: 'scale(1)'
					}"
					itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;"
					@change="tabChange"
				></u-tabs>
			</view>
		</u-sticky>
		<scroll-view 
			style="height: 100vh;"
			:scroll-y="true"
			lower-threshold="20"
			@scrolltolower ="loadGoods"
			:show-scrollbar="true"
		>
			<view class="order-list">
				<OrderItem v-for="(v, k) in goodList" :key="k"/>
			</view>
		</scroll-view>
		
		<FooterNav />
	</view>
</template>

<script setup>
import { ref, reactive, toRefs } from 'vue';
import OrderItem from '@/components/orderItem.vue';
import FooterNav from '@/components/footerNav.vue'

const state = reactive({
	searchText: '',
	tablist: [
		{
			type: 0,
			name: '全部订单'
		},
		{
			type: 1,
			name: '待评价'
		},
		{
			type: 2,
			name: '退款'
		}
	],
	goodList: [1,2,3,4,5,6,7,8,9],
	tabIndex: 0,
});
const { searchText, tablist, goodList, tabIndex } = toRefs(state);


const lineBg =
	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAOCAYAAABdC15GAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFxSURBVHgBzZNRTsJAEIb/WTW+lpiY+FZPIDew3ABP4GJ8hxsI9zBpOYHeQDwBPQI+mRiRvpLojtPdYhCorQqF/6GdbGd2vvwzBXZcNAt4oj1ANeUoAT5iqkUjbEFLHNmhD1YPEvpZ3ghkGlVDCkc94/BmHMq998I5ONiY1ZBfpKAyuOtgAc5yOEDmYEWNh32BHF91sGHZHmwW4azciN9aQwnz3SJEgOmte+R2tdLprTYoa50mvuomlLpD4Y3oQZnov6D2RzCqI93bWOHaEmAGqQUyRBlZR1WfarcD/EJ2z8DtzDGvsMCwpm8XOCfDUsVOCYhiqRxI/CTQo4UOvjzO7Pow18vfywneuUHHUUxLn55lLw5JFpZ8bEUcY8oXdOLWiHLTxvoGpLqoUmy6dBT15o/ox3znpoycAmxUsiJTbs1cmxeVKp+0zmFIS7bGWiVghC7Vwse8jFKAX9eljh4ggKLLv7uaQvG9/F59Oo2SouxPu7OTCxN/s8wAAAAASUVORK5CYII=';

const loadGoods = () => {
	console.log('加载更多')
	goodList.value = goodList.value.concat([1,1,1,1,1,1])
}

const tabChange = (index, item) => {
	console.log(index)
	if(tabIndex.value === index) {
		return ;
	}
	uni.showLoading({
		title: '加载中'
	});
	goodList.value = [];
	setTimeout(() => {
		goodList.value = [1,2,3,4,5,6];
		uni.hideLoading();
	}, 500)
	
}
</script>

<style lang="scss" scoped>
.page-orderList {
	padding-bottom: 100rpx;
	.search-warrper {
		padding: 12rpx 24rpx;
		background: #ffcc33;
	}
	.order-panel {
		padding: 6rpx;
		background-color: #fff;
	}
	.order-list {
		min-height: 100vh;
		background-color: #f5f5f5;
		padding: 16rpx 20rpx;
	}
}
</style>
