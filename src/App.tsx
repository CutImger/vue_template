import { defineComponent, computed } from 'vue';
import {
	NConfigProvider,
	zhCN,
	dateZhCN,
	darkTheme,
	lightTheme,
} from 'naive-ui';
import { useThemeStore } from '@/stores/ThemeStore';
import useStorePersist from './hooks/UseStorePersist';
import LoadingBarProvider from '@/components/Loading/LoadingBarProvider';
import LoadingRouterView from '@/components/Loading/LoadingRouterView';

export default defineComponent({
	name: 'App',
	setup() {
		const themeStore = useThemeStore();

		// 调用hook来启用持久化
		useStorePersist(themeStore, {
			key: 'theme',
			storage: localStorage,
		});

		// 使用计算属性来响应主题变化
		const themeOverrides = computed(() => ({
			common: {
				primaryColor: themeStore.primaryColor,
				primaryColorHover: themeStore.primaryColor,
				primaryColorPressed: themeStore.primaryColor,
				primaryColorSuppl: themeStore.primaryColor,
				borderColor: '#f5f5f5',
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
