<template>
    <h1></h1>
</template>

<script>

export default {
    created(){
        this.logout()
    },
    methods:{
        logout(){
            localStorage.removeItem('token')
            this.$router.push('/login')
        }
    }
}
</script>

<style scoped>

</style>