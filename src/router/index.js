import { createRouter, createWebHistory} from 'vue-router'
import Login from '../components/login/Login.vue'
import ClinicCenterAdmin from '../components/register/ClinicCenterAdmin.vue'
import ClinicAdmin from '../components/register/ClinicAdmin.vue'
import Doctor from '../components/register/Doctor.vue'
import Nurse from '../components/register/Nurse.vue'
import Patient from '../components/register/Patient.vue'
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
        {
            name: 'ClninicAdmin',
            path: '/register-clinic-admin',
            component: ClinicAdmin
        },
        {
            name: 'Doctor',
            path: '/register-doctor',
            component: Doctor
        },
        {
            name: 'Nurse',
            path: '/register-nurse',
            component: Nurse
        },
        {
            name: 'Patient',
            path: '/register-patient',
            component: Patient
        },
    ],
})

export default router;