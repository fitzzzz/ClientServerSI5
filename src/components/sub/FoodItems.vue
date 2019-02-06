<template>
    <b-list-group>
        <b-list-group-item button class="pointer" v-for="food in foodList" @click="goToFood(food.id)" :key="food.id">
            {{food.name}}
        </b-list-group-item>
    </b-list-group>
</template>

<script>
    import router from "../../router";
    import Food from "../pages/Food"

    export default {
        name: 'FoodItems',
        props: ["food-list"],
        methods: {
            goToFood(id) {
                router.replace({path: '/foods/' + id, component: Food})
            }
        }
    }
</script>

<style scoped>
    .pointer {
        cursor: pointer;
    }
</style>