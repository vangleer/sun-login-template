<template>
	<view class="sun-page">
		<button @click="store.increment">add</button>
		<h2>{{ store.count }}</h2>
		{{ $t('home.name') }}
		<button @click="changeI18n">修改语言</button>
	</view>
</template>

<script setup>
	import { changeLocale } from '@/locale/index.js'
	import { useAppStore } from '@/store/index.js'
	const store = useAppStore()
	
	function changeTheme() {
		uni.setBackgroundColor({
		    backgroundColor: '#ffffff',
		    backgroundColorTop: '#222222',
		    backgroundColorBottom: '#333333'
		});
	}
	
	function changeI18n() {
		const locale = uni.getLocale() === 'en' ? 'zh' : 'en'
		uni.setLocale(locale);
		changeLocale(locale)
	}
</script>

<style>

</style>
