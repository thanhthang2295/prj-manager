<template>
  <div id="header">
    <b-navbar>
      <b-container class="d-flex">
        <b-navbar-brand :to="{ path: '/' }"><img src="@/assets/logo.png" alt=""></b-navbar-brand>
        <b-navbar-nav>
          <b-nav-item :to="{ path: '/' }">Home</b-nav-item>
          <b-nav-item :to="{ path: '/product' }">Product</b-nav-item>
          <b-nav-item :to="{ path: '/admin' }">Admin</b-nav-item>
        </b-navbar-nav>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'header'
}
</script>

<style lang="scss" scoped>
  #header {
    position: relative;
    width: 100%;
    box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);
    .navbar-brand {
      max-width: 3.5rem;
      img {max-width: 100%}
    }
    .navbar-nav {
      .nav-link {
        font-size: 1.2rem;
        font-weight: bold;
      }
    }
  }
</style>

