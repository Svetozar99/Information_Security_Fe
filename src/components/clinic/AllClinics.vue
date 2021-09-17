<template>
    <div>
        <h1>OVO SU SVE KLINIKE U SISTEMU</h1>
        <h3 v-if="errorMsg">{{errorMsg}}</h3>
            <div style="background:red; margin:2% 0 2% 0; padding: 2% width:33% display:grid" v-for="c in clinics" :key="c.id">
            <div>
                <h3>NAME: {{c.name}}</h3>
                <h5>ADDRESS: {{c.address}} </h5>
                <h5>DESCRIPTION: {{c.description}}</h5>
            </div>
        </div>
    </div>
</template>

<script>
import axios from '../../axiosConfig'

export default {
    name:'AllClinics',
    created(){
        // let token = localStorage.getItem('token');
        // axios.defaults.headers['Authorization'] = `${token}`
        this.getAllClinics()
    },
    data(){
        return {
            clinics: [],
            errorMsg: ''
        }
    },
    methods:{
        getAllClinics(){
            axios
            .get('api/clinics/all')
            .then((response) => {
                this.clinics = response.data
                console.log(this.clinics + ' all clinics')
            })
            .catch((error) => {
                console.log(error)
                this.errorMsg = 'Error retriving data'
            })
        }
    }
}
</script>

<style scoped>

</style>