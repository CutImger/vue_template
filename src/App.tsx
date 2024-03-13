import { defineComponent } from 'vue';
import {
	NConfigProvider,
	zhCN,
	dateZhCN,
	darkTheme,
	lightTheme,
} from 'naive-ui';
import { useThemeStore } from '@/stores/themeStore';
import LoadingBarProvider from '@/components/LoadingBarProvider';
import LoadingRouterView from '@/components/LoadingRouterView';

export default defineComponent({
	name: 'App',
	setup() {
		const themeStore = useThemeStore();
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
				<LoadingBarProvider>
					<LoadingRouterView />
				</LoadingBarProvider>
			</NConfigProvider>
		);
	},
});
