import { createRouter, createWebHashHistory } from 'vue-router';
import { useLayoutStore } from '@/store/layout';
import AppLayout from '@/layout/AppLayout.vue';
import HomeView from '@/views/HomeView.vue';

const HomeRouteItem = {
    path: '/',
    name: 'HomeView',
    component: HomeView,
};

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/:catchAll(.*)',
            redirect: '/',
        },
        {
            path: '/',
            component: AppLayout,
            children: [
                HomeRouteItem,
                //add views
            ],
        },
    ],
});

router.afterEach((to) => {
    const layoutStore = useLayoutStore();
    // Скрыть меню, если не домашняя страница
    layoutStore.visibleMenu = to.name === HomeRouteItem.name;
});

export default router;
