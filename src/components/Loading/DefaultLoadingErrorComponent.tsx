import { NResult } from 'naive-ui';
import { defineComponent } from 'vue';
import './Styles/LoadingComponent.less';

export default defineComponent({
	name: 'DefaultLoadingErrorComponent',
	setup() {
		return () => (
			<div class="default-loading-error-component fullScreen flex">
				<NResult status="500" title="页面加载失败"></NResult>
			</div>
		);
	},
});
