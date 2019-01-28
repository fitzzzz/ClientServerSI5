<template>
    <div id="app">
        <AppLayout/>
    </div>
</template>

<script>
    import AppLayout from "./components/layouts/AppLayout"
    import Home from "./components/pages/Home";

    export default {
        name: 'app',
        components: {
            Home,
            AppLayout,
        }
    }
</script>
