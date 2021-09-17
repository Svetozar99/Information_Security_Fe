<template>
    <form @submit.prevent="logIn">
        <div style="width: 50%; background:white; padding: 5%; border-radius:2%;">
            <div class="mb-3" >
                <label for="username" class="form-label">Username:</label>
                <input type="text" class="form-control" id="username" aria-describedby="emailHelp" v-model="formData.username">
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password:</label>
                <input type="password" class="form-control" id="password" v-model="formData.password">
            </div>
            <button type="submit" class="btn btn-primary">Log In</button>
        </div>
    </form>
</template>

<script>
import axios from '../../axiosConfig'
export default {
    name:'Login',
    data() {
        return {
            formData:{
                username: '',
                password: ''
            },
        }
    },
    methods: {
        async logIn(){
            await axios
            .post('api/users/login', this.formData)
            .then((response) =>{
                localStorage.setItem('token', response.data.accessToken)
                console.log(response.data)
                this.$router.push({ path: '/all-clinics' })
            })
            .catch((error) => {
                console.log(error)
                alert('Data is not valid')
            })
        }
    }
}
</script>

<style scoped>

</style>