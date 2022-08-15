<template>
	<view class="sun-page">
		{{ $t('user.name') }}
		<button type="primary" style="background-color: #12C8B9;" @click="handleLogout">{{ $t('user.logout') }}</button>
	</view>
</template>

<script setup>
function handleLogout() {
  uni.redirectTo({
  	url: '/pages/login/login'
  })
}
</script>
