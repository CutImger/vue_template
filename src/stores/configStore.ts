import { defineStore } from 'pinia';

const useConfigStore = defineStore('configStore', {
	state: () => ({
		count: 0,
	}),
});

export default useConfigStore;
