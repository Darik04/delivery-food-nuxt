<template>
  <div>
    <div class="row">
      <ProductItem v-for="product in products" :key="product.id" :product="product"></ProductItem>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  // data() {
  //   return {
  //     cart: []
  //   }
  // },
  async fetch({store}) {
    if(store.getters.allProducts.length === 0){
      await store.dispatch('fetchProducts')
    }
  },
  computed: {
    products() {
      return this.$store.getters.products
    }
  },
  mounted() {
      this.$store.dispatch('cart/fetchCartProducts')

  }
}
</script>
