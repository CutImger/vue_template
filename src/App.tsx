import { defineComponent } from 'vue';
import {
	NConfigProvider,
	zhCN,
	dateZhCN,
	darkTheme,
	lightTheme,
} from 'naive-ui';
import { useThemeStore } from '@/stores/themeStore';

export default defineComponent({
	name: 'App',
	setup() {
		const themeStore = useThemeStore();
		console.log(import.meta.env.VITE_APP_BASE_URL);

		return () => (
			<NConfigProvider
				theme={themeStore.isDark ? darkTheme : lightTheme}
				locale={zhCN}
				date-locale={dateZhCN}
				theme-overrides={{
					common: {
						primaryColor: themeStore.primaryColor,
					},
				}}
			>
				<router-view />
			</NConfigProvider>
		);
	},
});
