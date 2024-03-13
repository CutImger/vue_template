import { defineComponent } from 'vue';

export default defineComponent({
	name: 'Layout',
	setup() {
		return () => (
			<div class="defaultLayout">
				<h1>首页</h1>
			</div>
		);
	},
});
