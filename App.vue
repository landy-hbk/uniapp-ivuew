<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			uni.onPushMessage((res) => {
				console.log("收到推送消息：",res) //监听推送消息
				if (res.type === "receive") {
					
					const { data } = res;
					// 创建通知栏消息
					uni.createPushMessage({
						title: data.title || 'test',
						content: data.content || '1234', 
						sound: 'system',
						cover: true,
						payload: {
							url: '/pages/index/index'
						},
						success: () => {
							console.log('推送消息成功！-----------')
						}
					})
				}else if(res.type === "click") {
					console.log("收到推送消息----click：",res) //监听推送消息点击
					const data = res.data;
					const { payload = {} } = data;
					if(payload) {
						uni.navigateTo({
							url: payload.url
						})
					}

				}else {
					console.log("收到推送消息-----click：",res) //监听推送消息
				}

			})
			
			
		},
		
		onShow: function() {
			console.log('App Show')
			// // #ifdef APP-PLUS
			// 	// 获得设备的CID
			// 	var pinf = plus.push.getClientInfo();
			// 	var cid = pinf.clientid; //客户端标识
				
			// 	console.log(cid, 'cid')
			// 	try {
			// 		uni.setStorageSync('device_cid', cid);
			// 	} catch (e) {
			// 		// error
			// 	}
				
				
			// // #endif
			uni.getPushClientId({
				success: res => {
					console.log('获取用户cid--------', res.cid)
				},
				fail: err => {
					console.log('获取用户cid--------err', err)	
				}
			})
			
			
		},
		// onHide: function() {
		// 	console.log('App Hide')
		// }
	}
</script>

<style lang="scss">
	@import "./common/common.scss";
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "uview-plus/index.scss";
</style>
