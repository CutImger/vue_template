import { defineComponent } from 'vue';
import useConfigStore from '@/stores/configStore';

export default defineComponent({
	name: 'Home',
	setup() {
		const configStore = useConfigStore();
		console.log(configStore);

		// const a = 'asldkadkajskdljasdkjalskdasd';

		return () => (
			<div class="home">
				<h1>首页组件</h1>
			</div>
		);
	},
});
