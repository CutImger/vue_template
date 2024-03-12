import { defineStore } from 'pinia';

interface ThemeState {
	isDark: boolean;
	primaryColor: string;
}

export const useThemeStore = defineStore('theme', {
	state: (): ThemeState => ({
		isDark: false, // 初始主题设为亮色主题
		primaryColor: '#FF0000', // 初始主题色是'#FF0000'
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
