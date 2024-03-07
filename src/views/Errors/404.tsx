import { defineComponent } from 'vue';

export default defineComponent({
	name: '404',
	setup() {
		return () => (
			<div class='404'>
				<h1>404</h1>

			</div>
		);
	},
});
