<template>
    <h1></h1>
</template>

<script>
import axios from '../../axiosConfig'

export default {
    name:'MyMedicialRecord',
    created(){
        let token = localStorage.getItem('token');
        axios.defaults.headers['Authorization'] = `${token}`
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