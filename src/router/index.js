import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/reviews',
        name: 'reviews',
        component: () => import('../components/Reviews.vue')
    },
    {
        path: '/reviews/the-slob',
        name: 'the slob',
        component: () => import('../components/reviews/TheSlob.vue')
    },
    {
        path: '/reviews/escape-room-2',
        name: 'escape room 2',
        component: () => import('../components/reviews/EscapeRoom2.vue')
    }
    ]
})

export default router