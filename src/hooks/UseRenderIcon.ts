// 使用h函数与NIcon组件配合渲染出一个图标组件

import { h } from 'vue';
import { NIcon } from 'naive-ui';
import type { Component } from 'vue';

const useRenderIcon = (icon: Component) => {
	return () => h(NIcon, null, { default: () => h(icon) });
};

export default useRenderIcon;
