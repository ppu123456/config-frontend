import { createWebHistory, createRouter } from 'vue-router'
import Home from '../components/navigation/VueHome.vue'
import Admin from '../components/navigation/VueAdmin.vue'

const routes = [
    {
        name: "Home",
        path: "/",
        component: Home,
    },
    {
        name: "Admin",
        path: "/admin",
        component: Admin
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router