import { NResult } from 'naive-ui';
import { defineComponent } from 'vue';

export default defineComponent({
	name: '404',
	setup() {
		return () => (
			<NResult
				status="404"
				title="404 资源不存在"
				description="生活总归带点荒谬"
			></NResult>
		);
	},
});
