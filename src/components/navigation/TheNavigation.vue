<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Information security</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li v-if="!tokenn" id="a" class="navbar-nav">
            <a href="/login" class="nav-link">Log In</a>
        </li>
        <!-- <label v-if="!tokenn" for="">Register:</label> -->
        <select v-if="!tokenn" id="userapi" class="navbar-nav">
          <option value="/register-clinic-center-admin">Register Clinic Center Admin</option>
          <option value="/register-clinic-admin">Register Clinic Admin</option>
          <option value="/register-doctor">Register Doctor</option>
          <option value="/register-nurse">Register Nurse</option>
          <option value="/register-patient">Register Patient</option>
        </select>
        <button v-if="!tokenn" @click="fin()">Register</button>
        
        <li v-if="tokenn" id="a" class="navbar-nav">
            <a href="/logout" class="nav-link">Log out</a>
        </li>
        <li v-if="tokenn" id="a" class="navbar-nav">
            <a href="/all-clinics" class="nav-link">All clinics</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name:'TheNavigation',
  data(){
    return {
      id:'',
      putanja:'',
      tokenn: localStorage.getItem('token'),
    }
  },
  methods:{
    fin(){
      var select = document.getElementById('userapi');
      var value = select.options[select.selectedIndex].value;
      console.log(value );
      this.$router.push({ path: value })
    }
  }
}
</script>

<style scoped>
  #a{
    margin: 3px;
    background-color: #b6becc;
  }
</style>