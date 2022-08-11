<template>
  <div>
    <form>
        <div class="mb-3 row">
          <label for="inputSearch" class="col-sm-2 col-form-label">Search</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="inputSearch" placeholder="Search" v-model="query">
          </div>
        </div>
        <button class="btn btn-primary" @click.prevent="search(query)">Search</button>
    </form>
    <div class="row">
      <ProductItem v-for="product in products" :key="product.id" :product="product"></ProductItem>
    </div>
    <center v-if="isLoading">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </center>
  </div>
</template>

<script>
import {useProducts} from "@/hooks/useProducts";
export default {
  data() {
    return {
      query: ''
    }
  },
  name: 'Composition',
  setup(props) {
    const {products, isLoading, search} = useProducts()
    return {
      products,
      isLoading,
      search,
    }
  }
}
</script>

<style scoped>
center{
  margin-top: 60px;
}
</style>
