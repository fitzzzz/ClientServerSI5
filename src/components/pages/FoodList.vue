<template>
    <div id="search-food-component">
        <b-container>
            <centered-layout>
                <h2>List some food</h2>
                <b-pagination-nav base-url="#" :number-of-pages="10" v-model="currentPage" />
                <b-list-group>
                    <b-list-group-item v-for="food in foodList" href="#" :key="food.id">{{food.name}}</b-list-group-item>
                </b-list-group>
                <br/>
                <b-pagination-nav base-url="#" :number-of-pages="10" v-model="currentPage" />
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
                foodList: [{id: 0, name: "caca"}],
                currentPage: 1
            }
        },
        mounted() {

        }
    }
</script>
