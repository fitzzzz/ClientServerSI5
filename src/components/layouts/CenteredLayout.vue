<template>
    <b-row>
        <b-col cols="12" offset="0" lg="8" offset-lg="2">
            <slot/>
        </b-col>
    </b-row>
</template>

<script>
    export default {
        name: "CenteredLayout"
    }
</script>

<style scoped>
    .row {
        margin: 0 !important;
    }
    </style>