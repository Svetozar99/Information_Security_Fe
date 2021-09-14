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
            <div class="mb-3">
                <label class="form-label" for="identifier">Identifier:</label>
                <input class="form-control" type="text" id="identifier" v-model="formData.identifier" />
            </div>
            <label for="">Clinic:</label>
            <select class="form-control" @change="changeClinic($event)" v-model="formData.idClinic">
                <option v-for="clinic in clinics" :value="clinic.id" :key="clinic.id">
                    {{ clinic.name }}
                </option>
            </select>
            
            <button class="btn btn-primary">Register</button>
        </div>
    </form>
</template>

<script>
    import axios from '../../axiosConfig'
    export default {
        name: 'ClinicCenterAdmin',
        created(){
            let token = localStorage.getItem('token');
            console.log(token + ' accessYoken')
            axios.defaults.headers['Authorization'] = `${token}`
            this.getClinics();
        },
        data() {
            return {
                formData :{
                    pass: '',
                    address: '',
                    phone: '',
                    firstname: '',
                    lastname: '',
                    email: '',
                    idClinic:0,
                    identifier: ''
                },
                errorMsg: '',
                clinics: [],
                cli: null,
                selectedCLi:null
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
            changeClinic(event){
                this.idClinic = event.target.value
                this.selectedCLi = event.target.options[event.target.options.selectedIndex].text
            }
        }
    }
</script>

<style scoped>

</style>