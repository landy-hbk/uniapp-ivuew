<template>
	<view class="login-view">
		<view class="flex-center">
			<image class="login-logo" src="../../static/logo.png"></image>
		</view>
		<view class="login-form">
			<view class="form-code">
				<input class="form-input" v-model="form.userName"  placeholder="请输入用户名"  />
				<text class="code-btn">获取验证码</text>
			</view>
			<input class="form-input" v-model="form.password" placeholder="请输入密码" />
			
			<button type="default" class="login-submit" @click="login">登录</button>
			<text class="login-prompt">未注册的手机号验证后自动创建账户</text>
			<view class="login-rule">
				<checkbox-group @change="checkbox">
					<label class="radio-label">
						<checkbox  :value="checkboxVal" class="rule-radio"  />
						<text class="rule-text">我已阅读并同意《用户协议》《隐私政策》，并授权美团使用该账号信息（如昵称、头像、收货地址）进行统一管理</text>
					</label>
				</checkbox-group>
			</view>
		</view>
	</view>
</template>

<script>
import { ref, reactive, onMounted  } from 'vue'
export default {
	setup() {
	   const form = reactive({
		   userName: '',
		   password: '',
		   checkRule: false,
	   })
	   const  checkboxVal  = ref('rule')
	   const login  = () => { 
		   console.log(form, 'form')
		   if(form.password.replace(/^\s*|\s*$/g,"") === '' || form.userName.replace(/^\s*|\s*$/g,"") === '') {
				return uni.showToast({
					icon: "none",
					title: '请输入用户名和密码！',
					duration: 1500
				});
		   }else if (!form.checkRule) {
			   return  uni.showToast({
			   	icon: "none",
			   	title: '请阅读并同意下方协议与隐私！',
			   	duration: 1500
			   });
		   }
			
			uni.setStorageSync('userInfo', {
				name: '小可爱',
				sex: '男',
				phone: '19912341111',
				age: 18,
			})
		   
			uni.navigateTo({
				url: '/pages/index/index'
			})
		   
	   }
	   const checkbox = e => {
		   const list = e.detail.value;
		   form.checkRule  = list.includes('rule');  
	   }
	   return {
		   form,
		   login,
		   checkbox,
		   checkboxVal,
	   }
	},
}
</script>

<style lang="scss" scoped>
.login-view {
	.login-logo {
		width: 160rpx;
		height: 160rpx;
		margin-top: 50rpx;
	}
	.login-form {
		padding: 100rpx 60rpx 0;
		.form-code {
			display: flex;
		}
		.code-btn {
			width: 160rpx;
			line-height: 70rpx;
			white-space: nowrap; 
		}
		.form-input {
			width: 100%;
			height: 70rpx;
			margin-bottom: 50rpx;
			border-bottom: .01rem solid #E5E5E5;
		}
		.login-submit {
			margin-top: 80rpx;
			background-image: linear-gradient(
			-133deg
			, #FFE77B 0%, #FFE77B 100%);
		}
	}
	.login-prompt {
		display: block;
		margin-top: 12rpx;
		text-align: center;
		font-size: 24rpx;
		color: rgba(0,0,0,0.50);
	}
	.login-rule {
		margin-top: 60rpx;
		.radio-label {
			display: flex;
		}
		.rule-radio {
			transform:scale(0.7) translateY(-20%);
		}
		.rule-text {
			font-size: 24rpx;
			color: rgba(0,0,0,0.50);
		}
	}
}
</style>