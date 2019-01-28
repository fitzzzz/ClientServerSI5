<template>
    <div id="search-food-component">
        <b-container>
         <centered-layout>
             <h2>List some food</h2>
         </centered-layout>
        </b-container>
    </div>
</template>

<script>
    import CenteredLayout from "../layouts/CenteredLayout";

    export default {
        name: 'SearchFood',
        components: {CenteredLayout},
        data() {
            return {
            }
        },
    }
</script>
