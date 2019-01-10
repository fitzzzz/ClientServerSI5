<template>
    <div id="app">
        <AppLayout>
            <HelloWorld msg="Welcome to Your Vue.js App"/>
        </AppLayout>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import AppLayout from "./components/AppLayout";

    export default {
        name: 'app',
        components: {
            AppLayout,
            HelloWorld
        }
    }
</script>