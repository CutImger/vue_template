import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'index',
		redirect: '/home',
		component: import('@/layout/Default/index'),
		children: [
			{ path: 'home', name: 'home', component: import('@/views/Home/index') },
			{ path: 'docs', name: 'docs', component: import('@/views/Docs') },
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
