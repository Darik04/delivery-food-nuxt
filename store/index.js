import axios from 'axios';
 
export const state = () => ({
	allProducts: [],
	products: [],
})

export const mutations = {
    setProducts(state, products) {
        state.products = products
        state.allProducts = products
    },
    setSearch(state, query){
        if(query == ''){
            state.products = state.allProducts
        }else{
            state.products = state.allProducts.filter(v => v.title.toLowerCase().includes(query.toLowerCase()))
        }
    },
}

export const actions = {
	async fetchProducts({commit}) {
        try {
            const response = await axios.get('https://app-up.org/api/v1/all-products/?menu=1&sort_by=price_down');
            commit('setProducts', response.data.results)
        } catch (e) {
            console.log(e)
        } 
    },
    async order({commit}, data) {
        try {
            const response = await axios.post('https://app-up.org/api/v1/order', data);
            commit('setProducts', response.data.results)
        } catch (e) {
            console.log(e)
        } 
    },
}

export const getters = {
    products: state => state.products,
    allProducts: state => state.allProducts,
}