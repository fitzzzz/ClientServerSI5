<template>
    <div id="app">
        <AppLayout>
            <search-food/>
        </AppLayout>
    </div>
</template>

<script>
    import AppLayout from "./components/AppLayout"
    import SearchFood from "./components/SearchFood.vue"

    export default {
        name: 'app',
        components: {
            AppLayout,
            SearchFood
        }
    }
</script>
