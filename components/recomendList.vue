<template>
	<view class="component-recomendList">
		<view class="recomendList-item" v-for="(v, k) in data" :key="k" @click="handleClick(v)">
			<image class="item-cover" mode="scaleToFill" width="180rpx" height="164rpx" :src="v.img"></image>
			<view  class="item-right">
				<view class="">
					<text class="item-title">{{ v.title }}</text>
					<text class="item-subTitle">{{ v.label }}</text>
				</view>
				<view class="item-bottom">
					<text class="price"><text class="font-big">{{ v.price || 0 }}</text>元</text>
					<text class="store-price">门市价:￥{{ v.market_price || 0 }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	// export default {
	// 	name:"recomendList",
	// 	data() {
	// 		return {
				
	// 		};
	// 	},
	// 	props: {
	// 		data: {
	// 			type: Array,
	// 			default: [],
	// 		},
	// 		goodsClick: {
	// 			type: Function,
	// 			default: () => {},
	// 		}
	// 	},
	// 	methods: {
	// 		handleClick(v) {
	// 			// console.log(this, 'ce')
	// 			this.goodsClick instanceof Function  &&  this.goodsClick(v);
	// 		}
	// 	},
	// }
	const props =  defineProps(
		{
			data: {
				type: Array,
				default: [],
			},
			goodsClick: {
				type: Function,
				default: () => {},
			}
		}
	)

	const handleClick = (v) => {
		props.goodsClick instanceof Function  &&  props.goodsClick(v);
	}
</script>

<style lang="scss" scoped>
.component-recomendList {
	.recomendList-item {
		display: flex;
		padding: 14rpx 0;
		border-bottom: 1rpx solid #ddd8ce;
		&:first-of-type {
			border-top: 1rpx solid #ddd8ce;
		}
		&:last-of-type {
			border-bottom: 0;
		}
		.item-cover {
			width: 180rpx;
			height: 164rpx;
			min-width: 180rpx;
		}
		.item-right {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			flex: 1 1;
			margin-left: 20rpx;
			.item-title {
				display: block;
				font-size: 30rpx;
				color: #333;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			.item-subTitle {
				display: block;
				font-size: 24rpx;
				color: #666;
			}
			.item-bottom {
				.price {
					font-size: 24rpx;
					color: #f60;
				}
				.font-big {
					font-size: 36rpx;
				}
				.store-price {
					margin-left: 9rpx;
					font-size: 24rpx;
					color: #666;
				}
			}
		}
	}
}
</style>