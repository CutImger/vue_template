import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import './Styles/MainNav.less';
import { MenuOption, NLayoutHeader, NMenu } from 'naive-ui';
import { MdPaper, MdStats, MdDesktop } from '@vicons/ionicons4';
import UseRenderIcon from '@/hooks/UseRenderIcon';

export default defineComponent({
	name: 'MainNav',
	setup() {
		const router = useRouter();
		const activeMenu = ref(router.currentRoute.value.path);
		console.log(router.currentRoute.value.path);

		// 菜单图标样式
		const iconStyle = { marginRight: '-6px' };

		// 菜单选项
		const menuOptions: MenuOption[] = [
			{
				label: '首页',
				key: '/index',
				icon: UseRenderIcon(MdDesktop, iconStyle),
			},
			{
				label: '控制台',
				key: '/console',
				icon: UseRenderIcon(MdStats, iconStyle),
			},
			{
				label: '文档中心',
				key: '/docs',
				icon: UseRenderIcon(MdPaper, iconStyle),
			},
		];
		return () => (
			<NLayoutHeader bordered>
				<div class="mainNav flex">
					<div class="logo">Admin</div>
					<div class="menu">
						<NMenu
							v-model:value={activeMenu.value}
							mode="horizontal"
							options={menuOptions}
							icon-size={16}
							responsive
							on-update:value={(key: string) => {
								router.push(key);
							}}
						/>
					</div>
				</div>
			</NLayoutHeader>
		);
	},
});
