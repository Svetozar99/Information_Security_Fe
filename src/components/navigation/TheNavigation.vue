<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Information security</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="navbar-nav">
            <a href="/login" class="nav-link">Log In</a>
        </li>
        <li class="navbar-nav">
            <a href="/register-clinic-center-admin" class="nav-link">Register Clinic Center Admin</a>
        </li>
        <li class="navbar-nav">
            <a href="/register-clinic-admin" class="nav-link">Register Clinic Admin</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>

export default {
  name:'TheNavigation',
}
</script>