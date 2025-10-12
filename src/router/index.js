import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView
    },
    {
        path: '/reviews',
        name: 'reviews',
        component: () => import('../components/Reviews.vue')
    },
    {
        path: '/gifs',
        name: 'gifs',
        component: () => import('../components/Gifs.vue')
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
    },
    {
        path: '/reviews/day-of-the-dead',
        name: 'day of the dead',
        component: () => import('../components/reviews/DayOfTheDead.vue')
    }
    ]
})

export default router