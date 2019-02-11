<template>
    <centered-layout>
        <FoodInfo :food="food"></FoodInfo>
        <comment-list  :id="this.$route.params.id" location="foods/"></comment-list>
    </centered-layout>
</template>

<script>
    import CenteredLayout from "../layouts/CenteredLayout";
    import FoodInfo from "../sub/FoodInfo";
    import CommentList from "../sub/CommentList";

    export default {
        name: "Food",
        components: {CommentList, FoodInfo, CenteredLayout},
        data() {
            return {
                food: {}
            }
        },
        mounted() {
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