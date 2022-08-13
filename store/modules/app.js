import { defineStore } from 'pinia';

export const useAppStore = defineStore('counter', {
	state: () => {
		return { count: 0 }
	},
	actions: {
		increment() {
			this.count++
		}
	},
})