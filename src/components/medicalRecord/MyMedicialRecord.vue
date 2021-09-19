<template>
    <div style="width: 50%; background:white; padding: 5%; border-radius:2%;">
        
        <div class="mb-3">
            <label class="form-label" for="firstName">Disease:</label>
            <h4>{{myrecord[0].disease}}</h4>
        </div>
        <div class="mb-3">
            <label class="form-label" for="lastName">Therapy:</label>
            <h4>{{myrecord[0].therapy}}</h4>
        </div>
        <div class="mb-3">
            <label class="form-label" for="userName">Diagnosis:</label>
            <h4>{{myrecord[0].note}}</h4>
        </div>
        
    </div>
</template>

<script>
import axios from '../../axiosConfig'

export default {
    name:'MyMedicialRecord',
    created(){
        let token = localStorage.getItem('token');
        axios.defaults.headers['Authorization'] = `Bearer ${token}`
        this.getMyRecord()
    },
    data(){
        return {
            myrecord: {},
            errorMsg: ''
        }
    },
    methods:{
        getMyRecord(){
            axios
            .get('api/medicalRecords/my-record')
            .then((response) => {
                this.myrecord = response.data
                console.log(this.myrecord + ' myrecord')
                console.log(JSON.stringify(this.myrecord[0].id))
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