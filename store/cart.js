import nuxtStorage from 'nuxt-storage';
 
export const state = () => ({
    cartProducts: []
})

export const mutations = {
    setCartProducts(state, newProducts) {
        state.cartProducts = newProducts
    },
    clearCart(state) {
        state.cartProducts = []
    },
}

export const actions = {

    fetchCartProducts({commit}) {
    
        let cartProd = nuxtStorage.localStorage.getData('cart')
        console.log(`Cart: ${cartProd}`)
        if(cartProd != null && cartProd != ''){
            let items = JSON.parse(cartProd)
            commit('setCartProducts', items)
        }

    },
    addToCart({commit}, product) {
        let cartProd = nuxtStorage.localStorage.getData('cart')
        if(cartProd != null && cartProd != ''){
            let items = JSON.parse(cartProd)
            items.push(product)
            nuxtStorage.localStorage.setData('cart', JSON.stringify(items))
            commit('setCartProducts', items)
        }else{
            nuxtStorage.localStorage.setData('cart', JSON.stringify([product]))
            commit('setCartProducts', [product])
        }
        let cart = nuxtStorage.localStorage.getData('cart')
        console.log(`Cart: ${cart}`)
    },

    clearCart({commit}) {
        console.log('CLEAR')
        commit('clearCart')
        nuxtStorage.localStorage.setData('cart', '')
    }
}

export const getters = {
    cartProducts: state => state.cartProducts
}