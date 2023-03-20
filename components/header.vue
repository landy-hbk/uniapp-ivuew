<template>
	<view class="header">
		<view class="user-loacation">
			<text>广州</text>
			<u-icon name="arrow-down" size="14"></u-icon>
		</view>
		
		<view class="header-search">
			<u-search 
				shape="round" 
				:clearabled="true" 
				:showAction="false"
				bgColor="#fff" 
				:value="inputText" 
				@clear="claerInput"
				@change="changeInput"
			></u-search>
		</view>
		<u-icon name="account-fill" size="30" class="right-icon" @click="jumpLogin"></u-icon>
	</view>
</template>

<script>
	import { toRaw } from 'vue'
	
	export default {
		name:"headers", 
		data() {
			return {
				inputText: '',
				value: '',
			};
		},
		methods: {
			claerInput() {
				this.inputText = '';
				
			},
			changeInput(e) {
				this.inputText = e;
			},
			jumpLogin() {
				uni.navigateTo({
					url: "/pages/index/login"
				})
			}
			
		}
	}
</script>

<style lang="scss" scoped>
.header {
	width: 100%;
	padding: 30rpx 30rpx;
	display: flex;
	justify-items: center;
	align-items: center;
	background: linear-gradient(135deg,#ffd000,#ffbd00);
	.user-loacation {
		display: flex;
		align-self: center;
	}
	.header-search {
		flex: 1;
	}
	.right-icon {
		justify-self:  end;
	}
}
</style>