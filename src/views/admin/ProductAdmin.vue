<template>
  <div class="product-admin">
    <table class="table table-hover table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Manufacturer</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="index">
          <td>{{product.name}}</td>
          <td>${{product.price}}</td>
          <td>{{product.manufacturer.name}}</td>
          <!-- <td>{{ product.id }}</td> -->
          <td>
            <div class="btn-action">
              <router-link :to="'/admin/edit/'+product._id">
                <i class="fa fa-pencil-square-o"></i>
              </router-link>
              <a @click="deleteProduct(product._id)">
                <i class="fa fa-trash"></i>
              </a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    products() {
      return this.$store.getters.allProducts;
    }
  },
  created() {
    if (this.products.length === 0) {
      this.$store.dispatch("allProducts");
    }
  },
  methods: {
    deleteProduct(id) {
      console.log(id);
      this.$store.dispatch("removeProduct", id);
    }
  }
};
</script>
