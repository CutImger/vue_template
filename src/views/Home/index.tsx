import { defineComponent } from 'vue';
import useConfigStore from '@/stores/configStore';
import { NButton, NSpace } from 'naive-ui';

export default defineComponent({
	name: 'Home',
	setup() {
		const configStore = useConfigStore();
		console.log(configStore);

		// const a = 'asldkadkajskdljasdkjalskdasd';

		return () => (
			<div class="home">
				<h1>首页组件</h1>
				<NSpace>
					<NButton>Default</NButton>
					<NButton type="tertiary">Tertiary</NButton>
					<NButton type="primary">Primary</NButton>
					<NButton type="info">Info</NButton>
					<NButton type="success">Success</NButton>
					<NButton type="warning">Warning</NButton>
					<NButton type="error">Error</NButton>
				</NSpace>
			</div>
		);
	},
});
