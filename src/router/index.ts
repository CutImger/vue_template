import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/Home/index';
import Docs from '@/views/Docs';
import NotFound from '@/views/Errors/404';

const routes = [
	{ path: '/', name: 'home', component: Home },
	{ path: '/docs', name: 'docs', component: Docs },
	{ path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
