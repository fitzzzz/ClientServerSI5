<template>
    <div v-if="loggedin">
        <slot/>
    </div>
    <div v-else>
        <slot name="notconnected"/>
    </div>
</template>

<script>
    export default {
        name: "LoginWrapper",
        data() {
            return {
                loggedin: false
            }
        },
        mounted() {
            if (localStorage.username) {
                this.loggedin = true;
            }
        },

    }
</script>

<style scoped>

</style>