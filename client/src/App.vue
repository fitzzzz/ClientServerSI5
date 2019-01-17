<template>
    <div id="app">
        <AppLayout>
            <Home/>
        </AppLayout>
    </div>
</template>

<script>
    import AppLayout from "./components/AppLayout"
    import SearchFood from "./components/SearchFood.vue"
    import Home from "./components/Home";

    export default {
        name: 'app',
        components: {
            Home,
            AppLayout,
            SearchFood
        }
    }
</script>
