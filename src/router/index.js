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
        path: '/gifs/alien',
        name: 'alien',
        component: () => import('../components/gifs/Alien.vue')
    },
    {
        path: '/gifs/vhs-halloween',
        name: 'vhs halloween',
        component: () => import('../components/gifs/VHSHalloween.vue')
    },
    {
        path: '/reviews/the-slob',
        name: 'the slob',
        component: () => import('../components/book-reviews/TheSlob.vue')
    },
    {
        path: '/reviews/escape-room-2',
        name: 'escape room 2',
        component: () => import('../components/film-reviews/EscapeRoom2.vue')
    },
    {
        path: '/reviews/day-of-the-dead',
        name: 'day of the dead',
        component: () => import('../components/tv-reviews/DayOfTheDead.vue')
    },
    {
        path: '/reviews/chucky',
        name: 'chucky',
        component: () => import('../components/tv-reviews/Chucky.vue')
    }
    ]
})

export default router