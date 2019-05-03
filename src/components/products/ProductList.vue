// ./src/components/products/ProductList
<template>
  <div class="products">
    <template v-for="(product, index) in products">
      <product-item :product="product" :key="index"></product-item>
    </template>
  </div>
</template>

<script>
  import ProductItem from './ProductItem.vue'
  export default {
    name: 'product-list',
    created () {
      if (this.products.length === 0) {
        this.$store.dispatch('allProducts')
      }
    },
    computed: {
      products () {
        return this.$store.getters.allProducts
      }
    },
    components: {
      'product-item': ProductItem
    }
  }
</script>