<template>
  <main class="page" :class="'page-'+ $route.name">
    <div class="banner-page">
      <img src="https://cdn.tgdd.vn/2019/04/campaign/1200-300-1200x300-(14).png" alt="">
    </div>
    <section class="sec-1">
      <div class="container">
        <product-list></product-list>
      </div>
    </section>
  </main>
</template>

<script>
import ProductList from '@/components/products/ProductList.vue'
export default {
  name: 'home',
  components: {
    'product-list': ProductList
  }
}
</script>
