import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/index';
import Home from '@/views/Home/index';
import Docs from '@/views/Docs';
import NotFound from '@/views/Errors/404';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'index',
		redirect: '/home',
		component: Layout,
		children: [
			{ path: 'home', name: 'home', component: Home },
			{ path: 'docs', name: 'docs', component: Docs },
		],
	},
	{ path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
