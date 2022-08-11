import {onMounted, ref} from 'vue'
import axios from 'axios';

export function useProducts() {

    const allProducts = ref([])
    const products = ref([])
    const isLoading = ref(true)

    const fetching = async () => {
        try {
            const response = await axios.get('https://app-up.org/api/v1/all-products/?menu=1&sort_by=price_down');
            allProducts.value = response.data.results
            products.value = response.data.results
            isLoading.value = false
        } catch (e) {
            console.log(e)
        } 
    } 
    const search = (query) => {
        console.log(`SEARCHING ${query}`)
        if(query == ''){
            products.value = allProducts.value
        }else{
            products.value = allProducts.value.filter(v => v.title.toLowerCase().includes(query.toLowerCase()))
        }
    }

    onMounted(fetching)
    return {
        products,
        isLoading,
        search,
    }
}