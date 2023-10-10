import { createRouter, createWebHashHistory, RouterOptions, Router, RouteRecordRaw } from 'vue-router';
const routes: RouteRecordRaw[] = [
    { path: '/', name: 'defaultPage', component: () => import('@/views/Page1.vue') },
    { path: '/compTest', name: 'compTest', component: () => import('@/views/compTest.vue') },
];

const options: RouterOptions = {
    history: createWebHashHistory(),
    routes,
}
   
const router: Router = createRouter(options)

export default router;