import { defineComponent, computed } from 'vue';
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

		// 使用计算属性来响应主题变化
		const themeOverrides = computed(() => ({
			common: {
				primaryColor: themeStore.primaryColor,
				primaryColorHover: themeStore.primaryColor,
				primaryColorPressed: themeStore.primaryColor,
				primaryColorSuppl: themeStore.primaryColor,
			},
			Switch: {
				railColorActive: themeStore.primaryColor,
			},
		}));

		const selectedTheme = computed(() =>
			themeStore.isDark ? darkTheme : lightTheme
		);

		return () => (
			<NConfigProvider
				theme={selectedTheme.value}
				locale={zhCN}
				date-locale={dateZhCN}
				theme-overrides={themeOverrides.value}
			>
				<LoadingBarProvider>
					<LoadingRouterView />
				</LoadingBarProvider>
			</NConfigProvider>
		);
	},
});
