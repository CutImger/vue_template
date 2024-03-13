/* eslint-disable vue/one-component-per-file */
import { defineComponent, ref, onMounted } from 'vue';
import { NLoadingBarProvider } from 'naive-ui';
import { useLoadingBar } from 'naive-ui';
import { RouterView, useRouter } from 'vue-router';

const LoadingBarTrigger = defineComponent({
	setup() {
		const loadingBar = useLoadingBar();
		const router = useRouter();

		const startLoading = (): void => {
			loadingBar.start();
		};

		const finishLoading = (): void => {
			loadingBar.finish();
		};

		const setupRouteLoading = (): void => {
			router.beforeEach((_to, _from, next) => {
				startLoading();
				next();
			});

			router.afterEach(() => {
				finishLoading();
			});
		};
		onMounted(() => {
			window.onload = finishLoading;
			setupRouteLoading();
		});
		return () => (
			<>
				<RouterView />
			</>
		);
	},
});

export default defineComponent({
	setup() {
		const loadingBarTargetRef = ref<HTMLElement | undefined>(undefined);

		return () => (
			<NLoadingBarProvider
				to={loadingBarTargetRef.value}
				containerStyle="position: absolute;"
			>
				<div
					ref={loadingBarTargetRef}
					style={{
						position: 'absolute',
						inset: 0,
						borderRadius: 'var(--n-border-radius)',
						overflow: 'hidden',
						pointerEvents: 'none',
					}}
				/>
				<LoadingBarTrigger />
			</NLoadingBarProvider>
		);
	},
});
