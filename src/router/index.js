import { createRouter, createWebHistory} from 'vue-router'
import Login from '../components/login/Login.vue'
import ClinicCenterAdmin from '../components/register/ClinicCenterAdmin.vue'
const router = new createRouter({
    history: createWebHistory(),
    routes: [
        {
                name: 'Login',
                path: '/login',
                component: Login
        },
        {
            name: 'ClninicCenterAdmin',
            path: '/register-clinic-center-admin',
            component: ClinicCenterAdmin
        },
    ],
})

export default router;