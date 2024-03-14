// 页面组件加载展示loading hook

import { defineAsyncComponent, DefineComponent } from 'vue';
import DefaultLoadingComponent from '@/components/Loading/DefaultLoadingComponent';
import DefaultLoadingErrorComponent from '@/components/Loading/DefaultLoadingErrorComponent';

// 定义类型
interface AsyncComponentOptions {
	loadingComponent?: DefineComponent<any, any, any>;
	errorComponent?: DefineComponent<any, any, any>;
	timeout?: number;
}

// 组件加载时loading
const useAsyncComponentLoader = (
	loader: any,
	options: AsyncComponentOptions = {}
): DefineComponent<any, any, any> => {
	const {
		loadingComponent = DefaultLoadingComponent, // loading组件
		errorComponent = DefaultLoadingErrorComponent, // 加载失败展示组件
		timeout = 60 * 1000, // 加载超时时间
	} = options;
	return defineAsyncComponent({
		loader: () => loader,
		loadingComponent,
		errorComponent,
		timeout,
		onError(error: Error, retry: () => void, fail: () => void, attempts: number) {
			if (error.message.match(/loading chunk \d+ failed/i) && attempts < 3) {
				retry();
			} else {
				fail();
			}
		},
	});
};

export default useAsyncComponentLoader;
