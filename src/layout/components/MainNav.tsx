import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import './Styles/MainNav.less';
import { MenuOption, NMenu } from 'naive-ui';
import { MdPaper, MdStats, MdDesktop } from '@vicons/ionicons4';
import UseRenderIcon from '@/hooks/UseRenderIcon';

export default defineComponent({
	name: 'MainNav',
	setup() {
		const router = useRouter();
		const activeMenu = ref('/');
		const menuOptions: MenuOption[] = [
			{
				label: '首页',
				key: '/index',
				icon: UseRenderIcon(MdDesktop),
			},
			{
				label: '控制台',
				key: '/console',
				icon: UseRenderIcon(MdStats),
			},
			{
				label: '文档中心',
				key: '/docs',
				icon: UseRenderIcon(MdPaper),
			},
		];
		return () => (
			<div class="mainNav flex">
				<div class="logo">Admin</div>
				<div class="menu">
					<NMenu
						v-model={activeMenu.value}
						mode="horizontal"
						options={menuOptions}
						responsive
						on-update:value={(key: string) => {
							router.push(key);
						}}
					/>
				</div>
			</div>
		);
	},
});
