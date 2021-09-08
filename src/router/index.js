import { createRouter, createWebHistory} from 'vue-router'
import Login from '../components/login/Login.vue'
const router = new createRouter({
    history: createWebHistory(),
    routes: [
        // {
        //     name: 'Home',
        //     path: '/',
        //     component: Home
        // },
        {
                name: 'Login',
                path: '/login',
                component: Login
        },
    ],
})

export default router;