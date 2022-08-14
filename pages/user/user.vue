<template>
  {{ $t('user.name') }}
  <button type="primary" style="background-color: #12C8B9;" @click="handleLogout">{{ $t('user.logout') }}</button>
</template>

<script setup>
function handleLogout() {
  uni.redirectTo({
  	url: '/pages/login/login'
  })
}
</script>

<style lang="scss" scoped></style>