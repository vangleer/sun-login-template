<template>
	<view>
		<button>修改背景颜色</button>
		<button @click="store.increment">add</button>
		<h2>{{ store.count }}</h2>
	</view>
</template>

<script setup>
	import { useAppStore } from '@/store/index.js'
	const store = useAppStore()
	
	function changeTheme() {
		uni.setBackgroundColor({
		    backgroundColor: '#ffffff',
		    backgroundColorTop: '#222222',
		    backgroundColorBottom: '#333333'
		});
	}
</script>

<style>

</style>
