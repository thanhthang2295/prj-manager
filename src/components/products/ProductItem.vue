// ./src/components/products/ProductItem
<template>
  <div class="col-md-4 col-sm-6 col-xs-12">
    <div class="card">
      <router-link :to="'/details/'+product._id" class="product-link"></router-link>
      <div class="card-img-top">
        <img class="img-responsive" :src="product.image" alt="">
      </div>
      <div class="card-body">
        <small>{{product.manufacturer.name}}</small>
        <h5 class="card-title">{{product.name}}</h5>
        <p class="card-price">${{product.price}}</p>
      </div>
      <div class="card-bottom">
        <product-button :product="product" ></product-button>
      </div>
    </div>
  </div>
</template>

<script>
  import ProductButton from './ProductButton.vue'
  export default {
    name: 'product-item',
    props: ['product'],
    components: {
      'product-button': ProductButton
    }
  }
</script>