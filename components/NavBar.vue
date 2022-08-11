<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
    <a class="navbar-brand" href="#">Delivery food</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <NuxtLink class="nav-link" aria-current="page" to="/">Home</NuxtLink>
        </li>
        <li class="nav-item">
            <NuxtLink class="nav-link" to="/cart">Cart <span>{{ $store.getters['cart/cartProducts'].length }}</span></NuxtLink>
        </li>
        <li class="nav-item">
            <a class="nav-link" aria-current="page" href="" @click.prevent="clearCartClick">Clear cart</a>
        </li>
        </ul>
        <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="searchQuery">
        <button class="btn btn-outline-success" @click.prevent="searchClick">Search</button>
        </form>
    </div>
    </div>
</nav>
</template>

<script>
export default {
    data() {
        return {
            searchQuery: ''
        }
    },
    methods: {
        searchClick(event) {
            this.$store.commit('setSearch', this.searchQuery)
        },
        clearCartClick(event) {
            this.$store.dispatch('cart/clearCart')

        }
    }
}
</script>
