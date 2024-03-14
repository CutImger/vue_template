import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import useAsyncComponentLoader from '@/hooks/UseAsyncComponentLoader';

// 主框架布局
import Layout from '@/layout/Default/index';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'index',
		redirect: '/index',
		component: Layout,
		children: [
			{
				path: 'index',
				name: 'index',
				component: useAsyncComponentLoader(import('@/views/Home/index')),
			},
			{
				path: 'docs',
				name: 'docs',
				component: useAsyncComponentLoader(import('@/views/Docs')),
			},
		],
	},
	{
		path: '/console',
		redirect: '/console/index',
		component: useAsyncComponentLoader(import('@/layout/Console/index')),
		children: [
			{
				path: 'index',
				name: 'consoleHome',
				component: useAsyncComponentLoader(import('@/views/Home/index')),
			},
		],
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: import('@/views/Errors/404'),
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
