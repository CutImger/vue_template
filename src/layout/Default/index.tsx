import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import '../Styles/Common.less';
import { NLayout, NLayoutContent, NLayoutFooter } from 'naive-ui';
import MainNav from '../Components/MainNav';

export default defineComponent({
	name: 'Layout',
	setup() {
		return () => (
			<NLayout class="fullScreen">
				<MainNav />
				<NLayoutContent content-style="padding: 24px;">
					<RouterView />
				</NLayoutContent>
				<NLayoutFooter>成府路</NLayoutFooter>
			</NLayout>
		);
	},
});
