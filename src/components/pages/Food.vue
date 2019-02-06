<template>
    <centered-layout>
        <FoodInfo :food="food"></FoodInfo>
    </centered-layout>
</template>

<script>
    import CenteredLayout from "../layouts/CenteredLayout";
    import FoodInfo from "../sub/FoodInfo";

    export default {
        name: "Food",
        components: {FoodInfo, CenteredLayout},
        data() {
            return {
                food: {}
            }
        },
        mounted() {
            console.log(this.$route.params);
            fetch(this.JAFA_SERVER + "foods/" + this.$route.params.id)
                .catch((error) => console.log(error))
                .then((response) => response.json())
                .then((data) => {
                    this.food = data;
                });
        }
    }
</script>

<style scoped>

</style>