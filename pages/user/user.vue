<template>
  
  <button @click="handleLogout">退出登录</button>
</template>

<script setup>
function handleLogout() {
  uni.redirectTo({
  	url: '/pages/login/login'
  })
}
</script>

<style lang="scss" scoped></style>