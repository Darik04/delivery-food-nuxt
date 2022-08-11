<template>
  <div>
      <h1>Checkout page</h1>
      <div class="alert alert-danger" role="alert" v-if="errorMessage != ''">{{ errorMessage }}</div>
      <form>
        <div class="mb-3 row">
          <label for="inputName" class="col-sm-2 col-form-label">Name</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="inputName" placeholder="Name" v-model="name">
          </div>
        </div>
        <div class="mb-4 row">
          <label for="inputPhone" class="col-sm-2 col-form-label">Phone</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="inputPhone" placeholder="Phone" v-model="phone">
          </div>
        </div>
        <div class="mb-4 row">
          <label for="inputAddress" class="col-sm-2 col-form-label">Address</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="inputAddress" placeholder="Address" v-model="address">
          </div>
        </div>
        <div class="mb-4 row">
          <label for="inputComment" class="col-sm-2 col-form-label">Comment</label>
          <div class="col-sm-10">
            <textarea type="text" class="form-control" id="inputComment" placeholder="Comment" v-model="comment"></textarea>
          </div>
        </div>
        <div class="mb-3 row">
          <h5>Products</h5>
          <p v-for="product in $store.getters['cart/cartProducts']" :key="product.id">{{ product.title }}</p>
        </div>

        <button class="btn btn-primary" @click.prevent="submitForm">Order</button>
      </form>
  </div>
</template>

<script>
export default {
  name: 'Checkout',
  data() {
    return {
      errorMessage: '',

      name: '',
      phone: '',
      address: '',
      comment: '',
    }
  },
  // async fetch({store}) {
  //   if(store.getters.allProducts.length === 0){
  //     await store.dispatch('fetchProducts')
  //   }
  // },

  mounted() {
  },

  methods: {
    submitForm() {
      this.errorMessage = ''
      if(this.name.trim() == ''){
        this.errorMessage = 'Enter the name'
      }else if(this.phone.trim() == ''){
        this.errorMessage = 'Enter the phone'
      }else if(this.address.trim() == ''){
        this.errorMessage = 'Enter the address'
      }

      if(this.errorMessage == ''){
        this.$store.dispatch('order', {
          name: this.name,
          phone_number: this.phone,
          address: this.address,
          comment: this.comment,
          products: this.$store.getters['cart/cartProducts'].map((product) => product.id)
        })
        this.$store.dispatch('cart/clearCart')
        this.$router.push('/')
        alert('Ordered succesfully')
      }
    }
  }
}
</script>

<style scoped>
h1{
  margin-top: 20px;
}

form{
  background: #FFF;
  max-width: 500px;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
}
</style>
