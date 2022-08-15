<template>
	<view class="sun-page">
		<view class="sun-title">
			<image class="sun-logo" src="../../static/imgs/fire_green.png" style="width:32px; height:32px;" />
			<text class="sun-title-text">sun-uni-template</text>
		</view>
		
		<view class="sun-tip">{{ $t('home.tip') }}</view>
		
		<view class="sun-list">
			<view
				v-for="item in list"
				:key="item.key"
				class="sun-item"
				@click="handleItemClick(item)"
			>
				<text>{{ $t(item.title) }}</text>
				<text class="sun-arrow"></text>
			</view>
		</view>
	</view>
</template>

<script setup>
	import http from '@/api/request.js'
	import { changeLocale } from '@/locale/index.js'
	import { useAppStore } from '@/store/index.js'
	const store = useAppStore()
	const list = [
	  { title: 'home.title1', key: 'i18n' },
	  { title: 'home.title2', key: 'request' },
	  { title: 'home.title3', key: 'pinia' }
	]
	
	function handleItemClick(item) {
		switch(item.key) {
			case 'i18n':
				changeI18n()
				break
			case 'request':
				http.get('/locale/en.json').then(res => {
					console.log(res)
				})
			default:
				uni.showToast({
					title: item.key
				})
				break
		}
	}
	function changeI18n() {
		const locale = uni.getLocale() === 'en' ? 'zh' : 'en'
		uni.setLocale(locale);
		changeLocale(locale)
	}
</script>

<style>

.sun-title {
	font-size: 44rpx;
	font-weight: 600;
	display: flex;
	align-items: center;
	margin-bottom: 20rpx;
}
.sun-logo {
	width: 64rpx;
	height: 64rpx;
}
.sun-title-text {
	padding-left: 16rpx;
}
.sun-tip {
	margin: 0 20rpx 80rpx;
	color: #969799;
	font-size: 28rpx;
}

.sun-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80rpx;
  border-radius: 40rpx;
  background-color: #f7f8fa;
  padding: 0 40rpx;
  cursor: pointer;
  margin-bottom: 28rpx;
}
.sun-item .sun-arrow {
	width: 20rpx;
	height: 20rpx;
	border-top: 1rpx solid #272e2d;
	border-right: 1rpx solid #272e2d;
	transform: rotate(45deg);
}
</style>
