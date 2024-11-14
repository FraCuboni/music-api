import { createRouter, createWebHistory } from 'vue-router';
import Home from './src/components/Home.vue';
import SearchPage from './src/components/SearchPage.vue';
import ArtistPage from './src/components/ArtistPage.vue';

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/search', component: SearchPage },
    { path: '/artist/:name', component: ArtistPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;