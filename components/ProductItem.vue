<template>
    <div class="card" style="width: 18rem;">
        <div class="card-img-top" :style="{ backgroundImage: 'url(' + product.picture + ')' }"></div>
        <div class="card-body">
            <div>
                <h5 class="card-title">{{ product.title }}</h5>
                <p class="card-text">{{ product.description }}</p>
            </div>
            <a href="#" class="btn btn-primary" @click="addToCart">В корзину</a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        product: {
            type: Object,
            required: true
        }
    },
    methods: {
        addToCart() {
            this.$store.dispatch('cart/addToCart', this.product)
        }
    }
}
</script>

<style scoped>
.card{
    margin-right: 10px;
    margin-top: 10px;
}
p, h5{
    color: #333
}
.card-img-top{
    width: 100%;
    height: 180px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    margin-top: 12px;
}
.card-body{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.btn{
    margin-top: 15px;
}
</style>