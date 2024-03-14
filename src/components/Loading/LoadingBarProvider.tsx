import { defineComponent, ref } from 'vue';
import { NLoadingBarProvider } from 'naive-ui';

export default defineComponent({
	name: 'LoadingBarProvider',
	setup(_, { slots }) {
		// 创建一个引用，用于定位加载条
		const loadingBarTargetRef = ref<HTMLElement>();

		// 渲染函数使用插槽，默认插槽为空
		return () => (
			<NLoadingBarProvider
				to={loadingBarTargetRef.value}
				containerStyle="position: absolute;"
			>
				{slots.default?.()}
			</NLoadingBarProvider>
		);
	},
});
