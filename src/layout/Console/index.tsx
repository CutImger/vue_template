import { defineComponent } from 'vue';
import { NLayout, NLayoutSider, NLayoutFooter, NMenu } from 'naive-ui';
import '../Styles/Common.less';
import MainNav from '../Components/MainNav';

const menuOptions = [
	{
		label: '且听风吟',
		key: 'hear-the-wind-sing',
	},
];

export default defineComponent({
	name: 'Layout',
	setup() {
		return () => (
			<div class="Layout">
				<NLayout>
					<MainNav />
					<NLayout hasSider style="height: calc(100vh - 83px)">
						<NLayoutSider
							bordered
							showTrigger
							collapseMode="width"
							collapsedWidth={64}
							width={240}
							nativeScrollbar={false}
						>
							<NMenu
								collapsedWidth={64}
								collapsedIconSize={22}
								options={menuOptions}
							/>
						</NLayoutSider>
						<NLayout>
							<router-view />
						</NLayout>
					</NLayout>
					<NLayoutFooter bordered>Footer Footer Footer</NLayoutFooter>
				</NLayout>
			</div>
		);
	},
});
