<template>
  <main class="page" :class="'page-'+ $route.name">
    <div class="admin-new">
      <div class="container d-flex">
        <div class="col-md-3">
          <ul class="admin-menu">
            <li><router-link to="/admin">View Products</router-link></li>
            <li><router-link to="/admin/new">New Product</router-link></li>
          </ul>
        </div>
        <div class="col-md-9">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
};
</script>
