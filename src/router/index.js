import { createRouter, createWebHistory} from 'vue-router'
import Login from '../components/login/Login.vue'
import ClinicCenterAdmin from '../components/register/ClinicCenterAdmin.vue'
import ClinicAdmin from '../components/register/ClinicAdmin.vue'
import Doctor from '../components/register/Doctor.vue'
import Nurse from '../components/register/Nurse.vue'
import Patient from '../components/register/Patient.vue'
import Logout from '../components/login/Logout.vue'
import AllClinics from '../components/clinic/AllClinics.vue'
import MyMedicialRecord from '../components/medicalRecord/MyMedicialRecord.vue'
import AddMedicialRecord from '../components/medicalRecord/AddMedicialRecord.vue'
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
        {
            name: 'Logout',
            path: '/logout',
            component: Logout
        },
        {
            name: 'AllClinics',
            path: '/all-clinics',
            component: AllClinics
        },
        {
            name: 'MyMedicialRecord',
            path: '/my-medicial-record',
            component: MyMedicialRecord
        },
        {
            name: 'AddMedicialRecord',
            path: '/add-medicial-record',
            component: AddMedicialRecord
        },
    ],
})

router.beforeEach((to,from, next) => {
    const token = localStorage.getItem('token')


    if ((to.name === 'Patient' && !token) 
        || (to.name === 'Nurse' && !token) 
        || (to.name === 'Doctor' && !token) 
        || (to.name === 'ClinicAdmin' && !token)
        || (to.name === 'ClinicCenterAdmin' && !token)) next();
    else if(to.name !== 'Login' && !token) next({ name: 'Login'});

    else if((to.name === 'Login'   
        || to.name === 'Patient' 
        || to.name === 'Nurse' 
        || to.name === 'ClinicAdmin'
        || to.name === 'Doctor' 
        || to.name === 'ClinicCenterAdmin') && token) next ({name: 'AllClinics'})
    else next();
})

export default router;