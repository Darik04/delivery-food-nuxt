<template>
  <div>
    <div class="row" v-if="products.length > 0">
      <ProductItem v-for="product in products" :key="product.id" :product="product"></ProductItem>
    </div>
    <div v-else class="alert alert-primary">Cart is empty!</div>

    <div v-if="products.length > 0" class="btn-wrapper">
      <div class="btn btn-primary" @click="navigateToOrderPage">
        Checkout order
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  // data() {
  //   return {
  //     cart: []
  //   }
  // },
  // async fetch({store}) {
  //   if(store.getters.allProducts.length === 0){
  //     await store.dispatch('fetchProducts')
  //   }
  // },
  computed: {
    products() {
      return this.$store.getters['cart/cartProducts']
    }
  },
  mounted() {
      this.$store.dispatch('cart/fetchCartProducts')

  },

  methods: {
    navigateToOrderPage() {
      this.$router.push('/checkout')
    }
  }
}
</script>

<style scoped>
.alert-primary{
  margin-top: 20px;
}
.btn-wrapper{
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: end;
  padding: 15px 60px;
  background-color: #FFF;
  box-shadow: 0px -3px 4px rgba(0, 0, 0, 0.1);
}
</style>
