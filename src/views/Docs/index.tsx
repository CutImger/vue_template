import { defineComponent } from 'vue';

export default defineComponent({
	name: 'Docs',
	setup() {
		return () => (
			<div class='docs'>
				<h1>文档页面</h1>
			</div>
		);
	},
});
