<template>
  <main class="page" :class="'page-'+ $route.name">
    <b-container>
      <product-list></product-list>
    </b-container>
  </main>
</template>

<script>
import ProductList from '@/components/products/ProductList.vue'
export default {
  name: "product",
  components: {
    'product-list': ProductList
  }
};
</script>

<style lang="scss" scoped>
.page-Product {
  position: relative;
  padding-top: 3rem;
}
</style>
