<template>
	<view>
		{{ count }}
	</view>
	
	<button @click="handleAdd">add</button>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)

function handleAdd() {
	count.value++
}
</script>

<style>

</style>
