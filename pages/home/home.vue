<template>
	<view>
		<button>修改背景颜色</button>
	</view>
</template>

<script setup>
	
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
