<template>
    <b-container>
        <centered-layout>
            <b-nav justified tabs>
                <b-nav-item @click="recipeNavigation(false)" :active="!location">See</b-nav-item>
                <b-nav-item @click="recipeNavigation(true)" :active="location">Add</b-nav-item>
            </b-nav>
            <br/>
            <SeeRecipe v-if="!location"/>
            <AddRecipe v-if="location"/>
        </centered-layout>
    </b-container>
</template>

<script>
    import CenteredLayout from "../layouts/CenteredLayout";
    import SeeRecipe from "../sub/SeeRecipe";
    import AddRecipe from "../sub/AddRecipe";

    export default {
        name: 'ShopList',
        components: {AddRecipe, SeeRecipe, CenteredLayout},
        data() {
            return {
                location: false,
            }
        },
        methods: {
            recipeNavigation(location) {
                this.location = location;
            },
        }
    }
</script>

