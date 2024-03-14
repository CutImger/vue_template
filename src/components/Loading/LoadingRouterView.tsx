import { defineComponent, onBeforeMount, onBeforeUnmount } from 'vue';
import { useLoadingBar } from 'naive-ui';
import { RouterView, useRouter } from 'vue-router';

export default defineComponent({
	name: 'LoadingRouterView',
	setup() {
		const loadingBar = useLoadingBar();
		const router = useRouter();

		// 启动加载条
		const startLoading = (): void => {
			loadingBar.start();
		};

		// 结束加载条
		const finishLoading = (): void => {
			loadingBar.finish();
		};

		// 设置路由守卫
		onBeforeMount(() => {
			router.beforeEach((_to, _from, next) => {
				startLoading();
				next();
			});

			router.afterEach(() => {
				finishLoading();
			});
		});

		// 在组件卸载前清理
		onBeforeUnmount(() => {
			window.removeEventListener('load', finishLoading);
		});

		return () => <RouterView />;
	},
});
