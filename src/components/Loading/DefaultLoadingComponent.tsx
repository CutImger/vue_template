import { defineComponent } from 'vue';
import { useThemeStore } from '@/stores/ThemeStore';
import './Styles/LoadingComponent.less';

// loading组件
export default defineComponent({
	name: 'DefaultLoadingComponent',
	setup() {
		const themeStore = useThemeStore();

		// 创建加载dom
		const cudeList = new Array(9).fill(null);

		return () => (
			<div class="default-loading-component flex fullScreen">
				<div class="sk-cube-grid">
					{cudeList.map((_item, index) => {
						return (
							<div
								class={`sk-cube sk-cube${index + 1}`}
								style={{ backgroundColor: themeStore.primaryColor }}
							></div>
						);
					})}
				</div>
			</div>
		);
	},
});
