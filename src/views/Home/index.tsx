import { defineComponent, ref } from 'vue';
import { NButton, NIcon, NSpace, NSwitch, NColorPicker } from 'naive-ui';
import { IosSunny, MdMoon } from '@vicons/ionicons4';
import { useThemeStore } from '@/stores/ThemeStore';

export default defineComponent({
	name: 'Home',
	setup() {
		const themeStore = useThemeStore();
		const theme = ref('false');
		return () => (
			<div class="home">
				<h1>首页组件</h1>
				<NSwitch
					v-model:value={theme.value}
					size="medium"
					v-slots={{
						'checked-icon': () => <NIcon component={MdMoon} />,
						'unchecked-icon': () => <NIcon component={IosSunny} />,
					}}
					onUpdate:value={() => {
						themeStore.toggleTheme();
					}}
				/>
				<NColorPicker
					class="togglePrimaryColor"
					// style={{ width: '34px' }}
					default-value={themeStore.primaryColor}
					swatches={[
						'#FFFFFF',
						'#18A058',
						'#2080F0',
						'#F0A020',
						'rgba(208, 48, 80, 1)',
					]}
					on-confirm={color => {
						themeStore.togglePrimaryColor(color);
					}}
					actions={['confirm', 'clear']}
				/>
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
