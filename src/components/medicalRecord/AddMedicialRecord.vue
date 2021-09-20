<template>
    <form @submit.prevent="addMedicialRecord">
        <div style="width: 50%; background:white; padding: 5%; border-radius:2%;">
            <div class="mb-3">
                <label class="form-label" for="disease">Disease:</label>
                <input class="form-control" type="text" id="disease" v-model="formData.disease" />
            </div>
            <div class="mb-3">
                <label class="form-label" for="note">Note:</label>
                <input class="form-control" type="text" id="note" v-model="formData.note" />
            </div>
            <div class="mb-3">
                <label class="form-label" for="therapy">Therapy:</label>
                <input class="form-control" type="text" id="therapy" v-model="formData.therapy" />
            </div>
            <label for="">Examination:</label>
            <select class="form-control" @change="changeEx($event)" v-model="formData.idExamination">
                <option v-for="e in examintions" :value="e.id" :key="e.id">
                    {{ e.dataAboutExamination }}
                </option>
            </select>
            
            <button class="btn btn-primary">Add</button>
        </div>
    </form>
</template>

<script>
import axios from '../../axiosConfig'

export default {
    name:'AddMedicialRecord',
    created(){
        let token = localStorage.getItem('token');
        axios.defaults.headers['Authorization'] = `Bearer ${token}`
        this.getAllEx()
    },
    data() {
        return {
            formData :{
                disease: '',
                note: '',
                therapy: '',
                idExamination: 0
            },
            errorMsg: '',
            examintions:[],
            ex: null,
            selectedEx:null
        }
    },
    methods:{
        addMedicialRecord(){
                axios
                .post('api/medicalRecords/add-note', this.formData)
                .then(response => {
                    console.log(response)
                    alert('Succesfully!!!')
                    // this.$router.push({ path: '/login' })
                })
                .catch(error => {
                    console.log(error)
                    this.errorMsg = 'Error retrivign data'
                })
            },
            getAllEx(){
                axios
                .get('api/examinations/all')
                .then((response) => {
                    this.examintions = response.data
                    console.log(this.examintions + ' examintions')
                })
                .catch((error) => {
                    console.log(error)
                    this.errorMsg = 'Error retriving data'
                })
            },
            changeEx(event){
                this.idExamination = event.target.value
                this.selectedEx = event.target.options[event.target.options.selectedIndex].text
            }
    }
}
</script>

<style scoped>

</style>