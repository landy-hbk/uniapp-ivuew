<template>
	<view class="header">
		<view class="user-loacation">
			<text>{{ address.city }}</text>
			<u-icon name="arrow-down" size="14"></u-icon>
		</view>

		<view class="header-search">
			<u-search shape="round" :clearabled="true" :showAction="false" bgColor="#fff" :value="inputText" @clear="claerInput" @change="changeInput"></u-search>
		</view>
		<u-icon name="account-fill" size="30" class="right-icon" @click="jumpLogin" v-if="!userInfo.name"></u-icon>
		<image src="../static/images/user_default.png" mode="widthFix" class="user-img" @click="jumpLogin" v-else></image>
		<!-- <text>{{ userInfo.name }}</text> -->
	</view>
</template>

<script setup>
import { onMounted, reactive, toRefs } from 'vue';

const state = reactive({
	inputText: '',
	value: '',
	userInfo: '',
	address: {
		sheng: '',
		city: '',
		area: ''
	}
})


const { inputText, value, userInfo, address } = toRefs(state)


onMounted(() => {
	const localUserInfo = uni.getStorageSync('userInfo');
	userInfo.value = localUserInfo;
	// const that = this
	const plateForm = uni.getSystemInfoSync().uniPlatform;
	if (plateForm === 'web') {
		address.value.city = '广州市';
		return;
	}

	uni.getLocation({
		type: 'wgs84',
		geocode: true,
		success: function (res) {
			console.log('获取成功：');

			// 创建地图坐标对象
			var point = new plus.maps.Point(res.longitude, res.latitude);

			//静态方法，反向地理编码
			plus.maps.Map.reverseGeocode(
				point,
				{},
				(event) => {
					var mapAddress = event.address; // 转换后的地理位置
					var point = event.coord; // 转换后的坐标信息
					var coordType = event.coordType; // 转换后的坐标系类型
					var reg = /.+?(省|市|自治区|自治州|县|区)/g;
					var addressList = mapAddress.match(reg).toString().split(',');
					//注意 因为存在直辖市， 当所在地区为普通省市时，addressList.length == 3，city = addressList[1];当所在地区为直辖市时addressList.length == 2，city = addressList[0];
					let city = addressList.length == 3 ? addressList[1] : addressList[0];
					console.log(addressList[1], 'addressList', addressList);
					address.value.city = addressList[1] || '广州市';
					address.value.sheng = addressList[0] || '广东省';
				},
				function (e) {
					console.log('失败回调', e);
				}
			);
		},
		fail() {
			console.log('获取失败：');
		}
	});
})


function claerInput() {
	inputText.value = '';
}
const changeInput = (e) => {
	inputText.value = e;
}

const jumpLogin = () => {
	if (!userInfo.value) {
		userInfo.value = (uni.getStorageSync('userInfo') && JSON.parse(uni.getStorageSync('userInfo'))) || {};
	}
	const url = userInfo && userInfo.value.name ? '/pages/user/index/index' : '/pages/index/login'

	uni.navigateTo({
		url: url
	});
};
</script>

<style lang="scss" scoped>
.header {
	width: 100%;
	padding: 30rpx 30rpx;
	display: flex;
	justify-items: center;
	align-items: center;
	background: linear-gradient(135deg, #ffd000, #ffbd00);
	.user-loacation {
		display: flex;
		align-self: center;
	}
	.header-search {
		flex: 1;
	}
	.right-icon {
		justify-self: end;
	}
	.user-img {
		width: 60rpx;
		height: 60rpx;
		margin-left: 6rpx;
	}
}
</style>
