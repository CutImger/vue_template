import { defineComponent } from 'vue';

export default defineComponent({
	name: 'App',
	setup() {
		console.log(import.meta.env.VITE_APP_BASE_URL);

		return () => (
			<div class="app">
				<n-config-provider>
					<router-view />
				</n-config-provider>
			</div>
		);
	},
});
