<template>
	<view class="sun-index">		<view class="sun-logo-box">			<view class="sun-logo">				<image class="sun-icon-img" src="@/static/imgs/fire_white.png"/>			</view>		</view>
		<view class="sun-login-box">			<view class="sun-label">				<image style="width: 28rpx;height:39rpx;" src="@/static/imgs/mobile_icon.png"/>				<text class="label-text">{{ $t('login.mobile') }}</text>			</view>			<view class="sun-input-box">				<input v-model="state.mobile" type="text" :placeholder="$t('login.enterMobile')" placeholder-class="placeholder-class"/>				<image @click="state.mobile=''" class="close-icon" src="@/static/imgs/close_icon.png"/>			</view>		</view>		<view class="sun-login-box">			<view class="sun-label">				<image style="width: 29rpx;height:37rpx;" src="@/static/imgs/pwd_icon.png"/>				<text class="label-text">{{ $t('login.password') }}</text>			</view>			<view class="sun-input-box">				<input v-model="state.password" type="text" :placeholder="$t('login.enterPassword')" placeholder-class="placeholder-class"/>				<image @click="state.password=''" class="close-icon" src="@/static/imgs/close_icon.png"/>			</view>		</view>		<view class="sun-tip">			<text class="sun-tip-text">{{ $t('login.forgot') }}</text>			<text class="sun-tip-text" @click="goRegister">{{ $t('register.name') }}</text>		</view>		<view class="login-btn-box">			<view class="login-btn" @click="handleSubmit">{{ $t('login.name') }}</view>		</view>	</view>
</template>

<script setup>
	import { reactive } from 'vue'
	import { t } from '@/locale/index.js'
	const state = reactive({
		mobile: '',
		password:''
	})
	
	function handleSubmit() {
		if(!state.mobile) return uni.showToast({title: t('login.enterMobile'),icon:'none',duration: 1500})		if(!state.password) return uni.showToast({title: t('login.enterPassword'),icon:'none',duration: 1500})		uni.showToast({title: t('common.success'),duration: 1500})
		setTimeout(() => {
			uni.switchTab({
				url: '/pages/home/home'
			})
		}, 1000)	}
	
	function goRegister() {		uni.navigateTo({url: '/pages/register/register'})	}
</script>

<style scoped>	.sun-logo-box {		display: flex;		justify-content: center;		align-items: center;		width: 750rpx;		height: 300rpx;	}
	.sun-logo {		display: flex;		justify-content: center;		align-items: center;		width: 180rpx;		height: 180rpx;		border-radius: 15rpx;		background-color: #12C8B9;		box-shadow: 0rpx 0rpx 30rpx rgba(18,200,185,0.5);	}	.close-icon {		width: 36rpx;		height: 34rpx;	}	.sun-icon-img {		width: 120rpx;		height: 120rpx;	}	.sun-login-box {		padding: 20rpx 60rpx;	}	.sun-label {		display: flex;		align-items: center;	}	.label-text {		margin-left: 16rpx;		font-weight: 500;		color: #272e2d;		font-size: 30rpx;	}	.sun-input-box {		display: flex;		align-items: center;		height: 100rpx;		border-bottom: 1rpx solid #eee;		padding: 0px 10rpx;	}	.sun-input-box input {		flex: 1;	}	.placeholder-class {		font-size: 30rpx;		color: #C0C0C0;	}	.sun-tip {		display: flex;		justify-content: space-between;		padding: 0rpx 68rpx;	}	.sun-tip-text {		color: #30C6B3;	}	.login-btn-box {		position: absolute;		bottom: 129rpx;		left: 0;		width: 750rpx;		padding: 50rpx 68rpx 0rpx;	}	.login-btn {		height: 82rpx;		border-radius: 41rpx;		background-color: #12C8B9;		box-shadow: -1px 12px 11px 0px rgba(16, 170, 157, 0.4);		text-align: center;		line-height: 82rpx;		font-size: 36rpx;		font-weight: 500;		color: #fff;	}</style>
