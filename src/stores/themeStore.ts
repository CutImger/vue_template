import { defineStore } from 'pinia';

interface ThemeState {
	isDark: boolean;
	primaryColor: string;
}

export const useThemeStore = defineStore('theme', {
	state: (): ThemeState => ({
		isDark: false, // 初始主题设为亮色主题
		primaryColor: '#1890ff', // 初始主题色是'#1890ff'
	}),
	actions: {
		toggleTheme() {
			this.isDark = !this.isDark;
		},
		togglePrimaryColor(hexColor: string) {
			this.primaryColor = hexColor;
		},
	},
});
