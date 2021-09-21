<template>
    <form @submit.prevent="addClinic">
        <div style="width: 50%; background:white; padding: 5%; border-radius:2%">
            <div class="mb-3">
                <label class="form-label" for="address"> Address: </label>
                <input class="form-control" type="text" id="address" v-model="formData.address"/>
            </div>
             <div class="mb-3">
                <label class="form-label" for="name"> Name: </label>
                <input class="form-control" type="text" id="name" v-model="formData.name"/>
            </div>
             <div class="mb-3">
                <label class="form-label" for="description"> Description: </label>
                <input class="form-control" type="text" id="description" v-model="formData.description"/>
            </div>

            <button class="btn btn-primary">Add</button>
        </div>
    </form>
</template>


<script>
import axios from '../../axiosConfig'
export default {
    name: 'AddClinic', 

    created() {
        let token = localStorage.getItem('token'); 
        axios.defaults.headers['Authorization'] = `Bearer ${token}`
    },

    data() {
        return {
            formData: {
                address: '', 
                name: '', 
                description: ''
            },

            errorMsg: ''
        }
    },

    methods: {
        addClinic() {
            axios
            .post('/api/clinics/saveClinic', this.formData)
            .then(response => {
                alert("doslo do post");
                response.errorMsg('doslo je do greske');
            })
            .catch(error => {
                console.log(error);
                this.errorMsg = "Greska kod dodavanja klinike"
            })
        }
    }
}
</script>

<style scoped>

</style>