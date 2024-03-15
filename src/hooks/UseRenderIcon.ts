// 使用h函数与NIcon组件配合渲染出一个图标组件

import { h } from 'vue';
import { NIcon } from 'naive-ui';
import type { Component } from 'vue';

// 定义 Style 类型
type Style =
	| string
	| Record<string, string | number>
	| Array<Record<string, string | number>>;

const useRenderIcon = (icon: Component, style?: Style) => {
	return () => h(NIcon, { style }, { default: () => h(icon) });
};

export default useRenderIcon;
