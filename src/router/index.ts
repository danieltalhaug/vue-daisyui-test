import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Index.vue'),
    },
    {
        path: '/test',
        name: 'Test',
        component: () => import('../views/Test.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;