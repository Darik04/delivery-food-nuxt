<template>
    <div>
        <NavBar/>
        <div class="container">
            <nuxt/>
        </div>
    </div>
</template>

<script>
import NavBar from '@/components/Navbar'

export default{
    components: {
        NavBar
    }
}
</script>
