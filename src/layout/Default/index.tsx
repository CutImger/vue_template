import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import MainNav from '../Components/MainNav';
import '../Styles/Common.less';
import {
	NLayout,
	NLayoutContent,
	NLayoutFooter,
	NLayoutHeader,
} from 'naive-ui';

export default defineComponent({
	name: 'Layout',
	setup() {
		return () => (
			<NLayout class="fullScreen">
				<NLayoutHeader>
					<MainNav />
				</NLayoutHeader>
				<NLayoutContent content-style="padding: 24px;">
					<RouterView />
				</NLayoutContent>
				<NLayoutFooter>成府路</NLayoutFooter>
			</NLayout>
		);
	},
});
