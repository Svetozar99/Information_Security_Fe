<template>
    <form @submit.prevent="editUser">
        <div style="width: 50%; background:white; padding: 5%; border-radius:2%;">
            <div class="mb-3">
                <label class="form-label" for="pass">Password:</label>                
                <input class="form-control" type="text" id="pass" v-model="myProfile.pass" />
            </div>
            <div class="mb-3">
                <label class="form-label" for="address">Address:</label>
                 <input class="form-control" type="text" id="address" v-model="myProfile.address" /> 
            </div>
            <div class="mb-3">
                <label class="form-label" for="phone">Phone:</label>
                 <input class="form-control" type="text" id="phone" v-model="myProfile.phone" /> 
            </div>
            <div class="mb-3">
                <label class="form-label" for="firstname">Firstname:</label>
                <input class="form-control" type="text" id="firstname" v-model="myProfile.firstname" /> 
            </div>
            <div class="mb-3">
                <label class="form-label" for="lastname">Lastname:</label>
                <input class="form-control" type="text" id="lastname" v-model="myProfile.lastname" />
            </div>
            <div class="mb-3">
                <label class="form-label" for="email">Email:</label>
                <input disabled="disabled" class="form-control" type="email" id="email" v-model="myProfile.email" /> 
            </div>
            <div class="mb-3">
                <label class="form-label" for="identifier">Identifier:</label>
               <input disabled="disabled" class="form-control" type="text" id="identifier" v-model="myProfile.identifier" />
            </div>
            <label for="">Clinic:</label>
            <select class="form-control" @change="changeClinic($event)" v-model="myProfile.clinicDto.id">
                
                <option v-for="clinic in clinics" :value="clinic.id" :key="clinic.id">
                    {{ clinic.name }}
                </option>
            </select>
            
            <button class="btn btn-primary"> Update information </button>
        </div>
    </form>
</template>

<script>

import axios from '../../axiosConfig'
export default {
    name: 'UpdatePatient',
    created() {
        let token = localStorage.getItem('token'); 
        axios.defaults.headers['Authorization'] = `Bearer ${token}`;
        this.getMyProfile(); 
        this.getAllClinics();
    },
    data() {
        return {
                myProfile: {},
                errorMsg: '',
                clinics: [],
                cli: null,
                selectedCLi:null
        }
    },
    methods: {
        getMyProfile(){
            axios
            .get('api/users/my-profile').
            then((response) => {
                this.myProfile = response.data
                console.log(this.myProfile + 'moj profil');
                console.log(JSON.stringify(this.myProfile.clinicDto) + ' moj profil stringify')
            })
            .catch((error) => {
                console.log(error)
                this.errorMsg = 'Nema podataka';
            })
        },
        editUser() {
            axios
            .put('api/users/edit', this.myProfile)
            .then(response => {
                console.log(response); 
                alert('Uspjesno izmijenjeni podaci');
            })
            .catch(error => {
                console.log(error); 
                this.errorMsg = "ne moze update pacijenta"
            })
        },

        getAllClinics(){
                axios
                .get('api/clinics/all')
                .then((response) => {
                    this.clinics = response.data
                    console.log(this.clinics + ' contacts')
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