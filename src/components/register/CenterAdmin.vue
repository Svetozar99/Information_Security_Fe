<template>
    <form @submit.prevent="addUser">
        <div style="width: 50%; background:white; padding: 5%; border-radius:2%;">
            <div class="mb-3">
                <label class="form-label" for="pass">Password:</label>
                <input class="form-control" type="text" id="pass" v-model="formData.pass" />
            </div>
            <div class="mb-3">
                <label class="form-label" for="address">address:</label>
                <input class="form-control" type="text" id="address" v-model="formData.address" />
            </div>
            <div class="mb-3">
                <label class="form-label" for="phone">phone:</label>
                <input class="form-control" type="text" id="phone" v-model="formData.phone" />
            </div>
            <div class="mb-3">
                <label class="form-label" for="firstname">firstname:</label>
                <input class="form-control" type="text" id="firstname" v-model="formData.firstname" />
            </div>
            <div class="mb-3">
                <label class="form-label" for="lastname">lastname:</label>
                <input class="form-control" type="text" id="lastname" v-model="formData.lastname" />
            </div>
            <div class="mb-3">
                <label class="form-label" for="email">Email:</label>
                <input class="form-control" type="email" id="email" v-model="formData.email" />
            </div>
            <select>
                <option v-for="clinic in clinics" v-bind:key="clinic.id">
                    {{ clinic.name }}
                </option>
            </select>
            <div class="mb-3">
                <label class="form-label" for="identifier">identifier:</label>
                <input class="form-control" type="text" id="identifier" v-model="formData.identifier" />
            </div>
            <button class="btn btn-primary">Register</button>
        </div>
    </form>
</template>

<script>
    import axios from '../axiosConfig'
    export default {
        name: 'CenterAdmin',
        // created(){
        //     let token = localStorage.getItem('token');
        //     axios.defaults.headers['Authorization'] = `${token}`
        // },
        data() {
            return {
                formData :{
                    pass: '',
                    address: '',
                    phone: '',
                    firstname: '',
                    lastname: '',
                    email: '',
                    idClinic:'',
                    identifier: ''
                },
                errorMsg: '',
                jwt: localStorage.getItem('token'),
                clinics: []
            }
        },
        methods: {
            addUser(){
                axios
                .post('api/users/register-clinic-center-admin', this.formData)
                .then(response => {
                    console.log(response)
                    alert('Succesfully registred')
                    this.$router.push({ path: '/login' })
                })
                .catch(error => {
                    console.log(error)
                    this.errorMsg = 'Error retrivign data'
                })
            },
            getClinics() {
                axios
                .get('api/clinics/all')
                .then((response) => {
                    console.log(response.data + 'sve klinike')
                    this.clinics = response.data
                })
                .catch((error) => {
                    console.log(error)
                    this.errorMsg = 'Error retriving data'
                })
            },
        }
    }
</script>

<style scoped>

</style>